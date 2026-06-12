# `securityCenterAssessmentPolicy` Submodule <a name="`securityCenterAssessmentPolicy` Submodule" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityCenterAssessmentPolicy <a name="SecurityCenterAssessmentPolicy" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy azurerm_security_center_assessment_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SecurityCenterAssessmentPolicy(Construct Scope, string Id, SecurityCenterAssessmentPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig">SecurityCenterAssessmentPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig">SecurityCenterAssessmentPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetCategories">ResetCategories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetImplementationEffort">ResetImplementationEffort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetRemediationDescription">ResetRemediationDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetSeverity">ResetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetThreats">ResetThreats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetUserImpact">ResetUserImpact</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(SecurityCenterAssessmentPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts">SecurityCenterAssessmentPolicyTimeouts</a>

---

##### `ResetCategories` <a name="ResetCategories" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetCategories"></a>

```csharp
private void ResetCategories()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImplementationEffort` <a name="ResetImplementationEffort" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetImplementationEffort"></a>

```csharp
private void ResetImplementationEffort()
```

##### `ResetRemediationDescription` <a name="ResetRemediationDescription" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetRemediationDescription"></a>

```csharp
private void ResetRemediationDescription()
```

##### `ResetSeverity` <a name="ResetSeverity" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetSeverity"></a>

```csharp
private void ResetSeverity()
```

##### `ResetThreats` <a name="ResetThreats" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetThreats"></a>

```csharp
private void ResetThreats()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserImpact` <a name="ResetUserImpact" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.resetUserImpact"></a>

```csharp
private void ResetUserImpact()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityCenterAssessmentPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SecurityCenterAssessmentPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SecurityCenterAssessmentPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SecurityCenterAssessmentPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SecurityCenterAssessmentPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecurityCenterAssessmentPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityCenterAssessmentPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityCenterAssessmentPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecurityCenterAssessmentPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference">SecurityCenterAssessmentPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.categoriesInput">CategoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.implementationEffortInput">ImplementationEffortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.remediationDescriptionInput">RemediationDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.severityInput">SeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.threatsInput">ThreatsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts">SecurityCenterAssessmentPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.userImpactInput">UserImpactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.categories">Categories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.implementationEffort">ImplementationEffort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.remediationDescription">RemediationDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.threats">Threats</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.userImpact">UserImpact</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.timeouts"></a>

```csharp
public SecurityCenterAssessmentPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference">SecurityCenterAssessmentPolicyTimeoutsOutputReference</a>

---

##### `CategoriesInput`<sup>Optional</sup> <a name="CategoriesInput" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.categoriesInput"></a>

```csharp
public string[] CategoriesInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImplementationEffortInput`<sup>Optional</sup> <a name="ImplementationEffortInput" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.implementationEffortInput"></a>

```csharp
public string ImplementationEffortInput { get; }
```

- *Type:* string

---

##### `RemediationDescriptionInput`<sup>Optional</sup> <a name="RemediationDescriptionInput" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.remediationDescriptionInput"></a>

```csharp
public string RemediationDescriptionInput { get; }
```

- *Type:* string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.severityInput"></a>

```csharp
public string SeverityInput { get; }
```

- *Type:* string

---

##### `ThreatsInput`<sup>Optional</sup> <a name="ThreatsInput" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.threatsInput"></a>

```csharp
public string[] ThreatsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|SecurityCenterAssessmentPolicyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts">SecurityCenterAssessmentPolicyTimeouts</a>

---

##### `UserImpactInput`<sup>Optional</sup> <a name="UserImpactInput" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.userImpactInput"></a>

```csharp
public string UserImpactInput { get; }
```

- *Type:* string

---

##### `Categories`<sup>Required</sup> <a name="Categories" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.categories"></a>

```csharp
public string[] Categories { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImplementationEffort`<sup>Required</sup> <a name="ImplementationEffort" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.implementationEffort"></a>

```csharp
public string ImplementationEffort { get; }
```

- *Type:* string

---

##### `RemediationDescription`<sup>Required</sup> <a name="RemediationDescription" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.remediationDescription"></a>

```csharp
public string RemediationDescription { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `Threats`<sup>Required</sup> <a name="Threats" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.threats"></a>

```csharp
public string[] Threats { get; }
```

- *Type:* string[]

---

##### `UserImpact`<sup>Required</sup> <a name="UserImpact" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.userImpact"></a>

```csharp
public string UserImpact { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityCenterAssessmentPolicyConfig <a name="SecurityCenterAssessmentPolicyConfig" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SecurityCenterAssessmentPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Description,
    string DisplayName,
    string[] Categories = null,
    string Id = null,
    string ImplementationEffort = null,
    string RemediationDescription = null,
    string Severity = null,
    string[] Threats = null,
    SecurityCenterAssessmentPolicyTimeouts Timeouts = null,
    string UserImpact = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#description SecurityCenterAssessmentPolicy#description}. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#display_name SecurityCenterAssessmentPolicy#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.categories">Categories</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#categories SecurityCenterAssessmentPolicy#categories}. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#id SecurityCenterAssessmentPolicy#id}. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.implementationEffort">ImplementationEffort</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#implementation_effort SecurityCenterAssessmentPolicy#implementation_effort}. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.remediationDescription">RemediationDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#remediation_description SecurityCenterAssessmentPolicy#remediation_description}. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.severity">Severity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#severity SecurityCenterAssessmentPolicy#severity}. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.threats">Threats</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#threats SecurityCenterAssessmentPolicy#threats}. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts">SecurityCenterAssessmentPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.userImpact">UserImpact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#user_impact SecurityCenterAssessmentPolicy#user_impact}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#description SecurityCenterAssessmentPolicy#description}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#display_name SecurityCenterAssessmentPolicy#display_name}.

---

##### `Categories`<sup>Optional</sup> <a name="Categories" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.categories"></a>

```csharp
public string[] Categories { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#categories SecurityCenterAssessmentPolicy#categories}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#id SecurityCenterAssessmentPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImplementationEffort`<sup>Optional</sup> <a name="ImplementationEffort" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.implementationEffort"></a>

```csharp
public string ImplementationEffort { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#implementation_effort SecurityCenterAssessmentPolicy#implementation_effort}.

---

##### `RemediationDescription`<sup>Optional</sup> <a name="RemediationDescription" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.remediationDescription"></a>

```csharp
public string RemediationDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#remediation_description SecurityCenterAssessmentPolicy#remediation_description}.

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.severity"></a>

```csharp
public string Severity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#severity SecurityCenterAssessmentPolicy#severity}.

---

##### `Threats`<sup>Optional</sup> <a name="Threats" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.threats"></a>

```csharp
public string[] Threats { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#threats SecurityCenterAssessmentPolicy#threats}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.timeouts"></a>

```csharp
public SecurityCenterAssessmentPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts">SecurityCenterAssessmentPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#timeouts SecurityCenterAssessmentPolicy#timeouts}

---

##### `UserImpact`<sup>Optional</sup> <a name="UserImpact" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyConfig.property.userImpact"></a>

```csharp
public string UserImpact { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#user_impact SecurityCenterAssessmentPolicy#user_impact}.

---

### SecurityCenterAssessmentPolicyTimeouts <a name="SecurityCenterAssessmentPolicyTimeouts" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SecurityCenterAssessmentPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#create SecurityCenterAssessmentPolicy#create}. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#delete SecurityCenterAssessmentPolicy#delete}. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#read SecurityCenterAssessmentPolicy#read}. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#update SecurityCenterAssessmentPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#create SecurityCenterAssessmentPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#delete SecurityCenterAssessmentPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#read SecurityCenterAssessmentPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/security_center_assessment_policy#update SecurityCenterAssessmentPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityCenterAssessmentPolicyTimeoutsOutputReference <a name="SecurityCenterAssessmentPolicyTimeoutsOutputReference" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SecurityCenterAssessmentPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts">SecurityCenterAssessmentPolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityCenterAssessmentPolicyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.securityCenterAssessmentPolicy.SecurityCenterAssessmentPolicyTimeouts">SecurityCenterAssessmentPolicyTimeouts</a>

---



