# `cdnFrontdoorCustomDomain` Submodule <a name="`cdnFrontdoorCustomDomain` Submodule" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorCustomDomain <a name="CdnFrontdoorCustomDomain" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain azurerm_cdn_frontdoor_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CdnFrontdoorCustomDomain(Construct Scope, string Id, CdnFrontdoorCustomDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig">CdnFrontdoorCustomDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig">CdnFrontdoorCustomDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.putTls">PutTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetDnsZoneId">ResetDnsZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.putTimeouts"></a>

```csharp
private void PutTimeouts(CdnFrontdoorCustomDomainTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a>

---

##### `PutTls` <a name="PutTls" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.putTls"></a>

```csharp
private void PutTls(CdnFrontdoorCustomDomainTls Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.putTls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a>

---

##### `ResetDnsZoneId` <a name="ResetDnsZoneId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetDnsZoneId"></a>

```csharp
private void ResetDnsZoneId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CdnFrontdoorCustomDomain resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

CdnFrontdoorCustomDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

CdnFrontdoorCustomDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

CdnFrontdoorCustomDomain.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

CdnFrontdoorCustomDomain.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CdnFrontdoorCustomDomain resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CdnFrontdoorCustomDomain to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CdnFrontdoorCustomDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CdnFrontdoorCustomDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.expirationDate">ExpirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference">CdnFrontdoorCustomDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.tls">Tls</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference">CdnFrontdoorCustomDomainTlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.validationToken">ValidationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.cdnFrontdoorProfileIdInput">CdnFrontdoorProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.dnsZoneIdInput">DnsZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.hostNameInput">HostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.tlsInput">TlsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.cdnFrontdoorProfileId">CdnFrontdoorProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.dnsZoneId">DnsZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.expirationDate"></a>

```csharp
public string ExpirationDate { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.timeouts"></a>

```csharp
public CdnFrontdoorCustomDomainTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference">CdnFrontdoorCustomDomainTimeoutsOutputReference</a>

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.tls"></a>

```csharp
public CdnFrontdoorCustomDomainTlsOutputReference Tls { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference">CdnFrontdoorCustomDomainTlsOutputReference</a>

---

##### `ValidationToken`<sup>Required</sup> <a name="ValidationToken" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.validationToken"></a>

```csharp
public string ValidationToken { get; }
```

- *Type:* string

---

##### `CdnFrontdoorProfileIdInput`<sup>Optional</sup> <a name="CdnFrontdoorProfileIdInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.cdnFrontdoorProfileIdInput"></a>

```csharp
public string CdnFrontdoorProfileIdInput { get; }
```

- *Type:* string

---

##### `DnsZoneIdInput`<sup>Optional</sup> <a name="DnsZoneIdInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.dnsZoneIdInput"></a>

```csharp
public string DnsZoneIdInput { get; }
```

- *Type:* string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.hostNameInput"></a>

```csharp
public string HostNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.timeoutsInput"></a>

```csharp
public IResolvable|CdnFrontdoorCustomDomainTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a>

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.tlsInput"></a>

```csharp
public CdnFrontdoorCustomDomainTls TlsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a>

---

##### `CdnFrontdoorProfileId`<sup>Required</sup> <a name="CdnFrontdoorProfileId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.cdnFrontdoorProfileId"></a>

```csharp
public string CdnFrontdoorProfileId { get; }
```

- *Type:* string

---

##### `DnsZoneId`<sup>Required</sup> <a name="DnsZoneId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.dnsZoneId"></a>

```csharp
public string DnsZoneId { get; }
```

- *Type:* string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorCustomDomainConfig <a name="CdnFrontdoorCustomDomainConfig" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CdnFrontdoorCustomDomainConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CdnFrontdoorProfileId,
    string HostName,
    string Name,
    CdnFrontdoorCustomDomainTls Tls,
    string DnsZoneId = null,
    string Id = null,
    CdnFrontdoorCustomDomainTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.cdnFrontdoorProfileId">CdnFrontdoorProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#cdn_frontdoor_profile_id CdnFrontdoorCustomDomain#cdn_frontdoor_profile_id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.hostName">HostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#host_name CdnFrontdoorCustomDomain#host_name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#name CdnFrontdoorCustomDomain#name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.tls">Tls</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a></code> | tls block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.dnsZoneId">DnsZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#dns_zone_id CdnFrontdoorCustomDomain#dns_zone_id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#id CdnFrontdoorCustomDomain#id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CdnFrontdoorProfileId`<sup>Required</sup> <a name="CdnFrontdoorProfileId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.cdnFrontdoorProfileId"></a>

```csharp
public string CdnFrontdoorProfileId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#cdn_frontdoor_profile_id CdnFrontdoorCustomDomain#cdn_frontdoor_profile_id}.

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.hostName"></a>

```csharp
public string HostName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#host_name CdnFrontdoorCustomDomain#host_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#name CdnFrontdoorCustomDomain#name}.

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.tls"></a>

```csharp
public CdnFrontdoorCustomDomainTls Tls { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a>

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#tls CdnFrontdoorCustomDomain#tls}

---

##### `DnsZoneId`<sup>Optional</sup> <a name="DnsZoneId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.dnsZoneId"></a>

```csharp
public string DnsZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#dns_zone_id CdnFrontdoorCustomDomain#dns_zone_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#id CdnFrontdoorCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainConfig.property.timeouts"></a>

```csharp
public CdnFrontdoorCustomDomainTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#timeouts CdnFrontdoorCustomDomain#timeouts}

---

### CdnFrontdoorCustomDomainTimeouts <a name="CdnFrontdoorCustomDomainTimeouts" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CdnFrontdoorCustomDomainTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#create CdnFrontdoorCustomDomain#create}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#delete CdnFrontdoorCustomDomain#delete}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#read CdnFrontdoorCustomDomain#read}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#update CdnFrontdoorCustomDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#create CdnFrontdoorCustomDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#delete CdnFrontdoorCustomDomain#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#read CdnFrontdoorCustomDomain#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#update CdnFrontdoorCustomDomain#update}.

---

### CdnFrontdoorCustomDomainTls <a name="CdnFrontdoorCustomDomainTls" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CdnFrontdoorCustomDomainTls {
    string CdnFrontdoorSecretId = null,
    string CertificateType = null,
    CdnFrontdoorCustomDomainTlsCipherSuite CipherSuite = null,
    string MinimumVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.cdnFrontdoorSecretId">CdnFrontdoorSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#cdn_frontdoor_secret_id CdnFrontdoorCustomDomain#cdn_frontdoor_secret_id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.certificateType">CertificateType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#certificate_type CdnFrontdoorCustomDomain#certificate_type}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.cipherSuite">CipherSuite</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuite">CdnFrontdoorCustomDomainTlsCipherSuite</a></code> | cipher_suite block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.minimumVersion">MinimumVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#minimum_version CdnFrontdoorCustomDomain#minimum_version}. |

---

##### `CdnFrontdoorSecretId`<sup>Optional</sup> <a name="CdnFrontdoorSecretId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.cdnFrontdoorSecretId"></a>

```csharp
public string CdnFrontdoorSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#cdn_frontdoor_secret_id CdnFrontdoorCustomDomain#cdn_frontdoor_secret_id}.

---

##### `CertificateType`<sup>Optional</sup> <a name="CertificateType" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.certificateType"></a>

```csharp
public string CertificateType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#certificate_type CdnFrontdoorCustomDomain#certificate_type}.

---

##### `CipherSuite`<sup>Optional</sup> <a name="CipherSuite" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.cipherSuite"></a>

```csharp
public CdnFrontdoorCustomDomainTlsCipherSuite CipherSuite { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuite">CdnFrontdoorCustomDomainTlsCipherSuite</a>

cipher_suite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#cipher_suite CdnFrontdoorCustomDomain#cipher_suite}

---

##### `MinimumVersion`<sup>Optional</sup> <a name="MinimumVersion" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls.property.minimumVersion"></a>

```csharp
public string MinimumVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#minimum_version CdnFrontdoorCustomDomain#minimum_version}.

---

### CdnFrontdoorCustomDomainTlsCipherSuite <a name="CdnFrontdoorCustomDomainTlsCipherSuite" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuite.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CdnFrontdoorCustomDomainTlsCipherSuite {
    string Type,
    CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers CustomCiphers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuite.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#type CdnFrontdoorCustomDomain#type}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuite.property.customCiphers">CustomCiphers</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers">CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers</a></code> | custom_ciphers block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuite.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#type CdnFrontdoorCustomDomain#type}.

---

##### `CustomCiphers`<sup>Optional</sup> <a name="CustomCiphers" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuite.property.customCiphers"></a>

```csharp
public CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers CustomCiphers { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers">CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers</a>

custom_ciphers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#custom_ciphers CdnFrontdoorCustomDomain#custom_ciphers}

---

### CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers <a name="CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers {
    string[] Tls12 = null,
    string[] Tls13 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers.property.tls12">Tls12</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#tls12 CdnFrontdoorCustomDomain#tls12}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers.property.tls13">Tls13</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#tls13 CdnFrontdoorCustomDomain#tls13}. |

---

##### `Tls12`<sup>Optional</sup> <a name="Tls12" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers.property.tls12"></a>

```csharp
public string[] Tls12 { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#tls12 CdnFrontdoorCustomDomain#tls12}.

---

##### `Tls13`<sup>Optional</sup> <a name="Tls13" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers.property.tls13"></a>

```csharp
public string[] Tls13 { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_custom_domain#tls13 CdnFrontdoorCustomDomain#tls13}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorCustomDomainTimeoutsOutputReference <a name="CdnFrontdoorCustomDomainTimeoutsOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CdnFrontdoorCustomDomainTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CdnFrontdoorCustomDomainTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTimeouts">CdnFrontdoorCustomDomainTimeouts</a>

---


### CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference <a name="CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.resetTls12">ResetTls12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.resetTls13">ResetTls13</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTls12` <a name="ResetTls12" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.resetTls12"></a>

```csharp
private void ResetTls12()
```

##### `ResetTls13` <a name="ResetTls13" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.resetTls13"></a>

```csharp
private void ResetTls13()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.tls12Input">Tls12Input</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.tls13Input">Tls13Input</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.tls12">Tls12</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.tls13">Tls13</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers">CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tls12Input`<sup>Optional</sup> <a name="Tls12Input" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.tls12Input"></a>

```csharp
public string[] Tls12Input { get; }
```

- *Type:* string[]

---

##### `Tls13Input`<sup>Optional</sup> <a name="Tls13Input" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.tls13Input"></a>

```csharp
public string[] Tls13Input { get; }
```

- *Type:* string[]

---

##### `Tls12`<sup>Required</sup> <a name="Tls12" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.tls12"></a>

```csharp
public string[] Tls12 { get; }
```

- *Type:* string[]

---

##### `Tls13`<sup>Required</sup> <a name="Tls13" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.tls13"></a>

```csharp
public string[] Tls13 { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference.property.internalValue"></a>

```csharp
public CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers">CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers</a>

---


### CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference <a name="CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.putCustomCiphers">PutCustomCiphers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.resetCustomCiphers">ResetCustomCiphers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomCiphers` <a name="PutCustomCiphers" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.putCustomCiphers"></a>

```csharp
private void PutCustomCiphers(CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.putCustomCiphers.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers">CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers</a>

---

##### `ResetCustomCiphers` <a name="ResetCustomCiphers" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.resetCustomCiphers"></a>

```csharp
private void ResetCustomCiphers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.customCiphers">CustomCiphers</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference">CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.customCiphersInput">CustomCiphersInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers">CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuite">CdnFrontdoorCustomDomainTlsCipherSuite</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomCiphers`<sup>Required</sup> <a name="CustomCiphers" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.customCiphers"></a>

```csharp
public CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference CustomCiphers { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference">CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference</a>

---

##### `CustomCiphersInput`<sup>Optional</sup> <a name="CustomCiphersInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.customCiphersInput"></a>

```csharp
public CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers CustomCiphersInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers">CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference.property.internalValue"></a>

```csharp
public CdnFrontdoorCustomDomainTlsCipherSuite InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuite">CdnFrontdoorCustomDomainTlsCipherSuite</a>

---


### CdnFrontdoorCustomDomainTlsOutputReference <a name="CdnFrontdoorCustomDomainTlsOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CdnFrontdoorCustomDomainTlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.putCipherSuite">PutCipherSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetCdnFrontdoorSecretId">ResetCdnFrontdoorSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetCertificateType">ResetCertificateType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetCipherSuite">ResetCipherSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetMinimumVersion">ResetMinimumVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCipherSuite` <a name="PutCipherSuite" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.putCipherSuite"></a>

```csharp
private void PutCipherSuite(CdnFrontdoorCustomDomainTlsCipherSuite Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.putCipherSuite.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuite">CdnFrontdoorCustomDomainTlsCipherSuite</a>

---

##### `ResetCdnFrontdoorSecretId` <a name="ResetCdnFrontdoorSecretId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetCdnFrontdoorSecretId"></a>

```csharp
private void ResetCdnFrontdoorSecretId()
```

##### `ResetCertificateType` <a name="ResetCertificateType" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetCertificateType"></a>

```csharp
private void ResetCertificateType()
```

##### `ResetCipherSuite` <a name="ResetCipherSuite" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetCipherSuite"></a>

```csharp
private void ResetCipherSuite()
```

##### `ResetMinimumVersion` <a name="ResetMinimumVersion" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.resetMinimumVersion"></a>

```csharp
private void ResetMinimumVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.cipherSuite">CipherSuite</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference">CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.cdnFrontdoorSecretIdInput">CdnFrontdoorSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.certificateTypeInput">CertificateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.cipherSuiteInput">CipherSuiteInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuite">CdnFrontdoorCustomDomainTlsCipherSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.minimumVersionInput">MinimumVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.cdnFrontdoorSecretId">CdnFrontdoorSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.certificateType">CertificateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.minimumVersion">MinimumVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CipherSuite`<sup>Required</sup> <a name="CipherSuite" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.cipherSuite"></a>

```csharp
public CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference CipherSuite { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference">CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference</a>

---

##### `CdnFrontdoorSecretIdInput`<sup>Optional</sup> <a name="CdnFrontdoorSecretIdInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.cdnFrontdoorSecretIdInput"></a>

```csharp
public string CdnFrontdoorSecretIdInput { get; }
```

- *Type:* string

---

##### `CertificateTypeInput`<sup>Optional</sup> <a name="CertificateTypeInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.certificateTypeInput"></a>

```csharp
public string CertificateTypeInput { get; }
```

- *Type:* string

---

##### `CipherSuiteInput`<sup>Optional</sup> <a name="CipherSuiteInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.cipherSuiteInput"></a>

```csharp
public CdnFrontdoorCustomDomainTlsCipherSuite CipherSuiteInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsCipherSuite">CdnFrontdoorCustomDomainTlsCipherSuite</a>

---

##### `MinimumVersionInput`<sup>Optional</sup> <a name="MinimumVersionInput" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.minimumVersionInput"></a>

```csharp
public string MinimumVersionInput { get; }
```

- *Type:* string

---

##### `CdnFrontdoorSecretId`<sup>Required</sup> <a name="CdnFrontdoorSecretId" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.cdnFrontdoorSecretId"></a>

```csharp
public string CdnFrontdoorSecretId { get; }
```

- *Type:* string

---

##### `CertificateType`<sup>Required</sup> <a name="CertificateType" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.certificateType"></a>

```csharp
public string CertificateType { get; }
```

- *Type:* string

---

##### `MinimumVersion`<sup>Required</sup> <a name="MinimumVersion" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.minimumVersion"></a>

```csharp
public string MinimumVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTlsOutputReference.property.internalValue"></a>

```csharp
public CdnFrontdoorCustomDomainTls InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorCustomDomain.CdnFrontdoorCustomDomainTls">CdnFrontdoorCustomDomainTls</a>

---



