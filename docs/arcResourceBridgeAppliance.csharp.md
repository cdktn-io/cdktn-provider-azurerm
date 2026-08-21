# `arcResourceBridgeAppliance` Submodule <a name="`arcResourceBridgeAppliance` Submodule" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArcResourceBridgeAppliance <a name="ArcResourceBridgeAppliance" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance azurerm_arc_resource_bridge_appliance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ArcResourceBridgeAppliance(Construct Scope, string Id, ArcResourceBridgeApplianceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig">ArcResourceBridgeApplianceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig">ArcResourceBridgeApplianceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetPublicKeyBase64">ResetPublicKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.putIdentity"></a>

```csharp
private void PutIdentity(ArcResourceBridgeApplianceIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity">ArcResourceBridgeApplianceIdentity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.putTimeouts"></a>

```csharp
private void PutTimeouts(ArcResourceBridgeApplianceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts">ArcResourceBridgeApplianceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPublicKeyBase64` <a name="ResetPublicKeyBase64" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetPublicKeyBase64"></a>

```csharp
private void ResetPublicKeyBase64()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ArcResourceBridgeAppliance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ArcResourceBridgeAppliance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ArcResourceBridgeAppliance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ArcResourceBridgeAppliance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ArcResourceBridgeAppliance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ArcResourceBridgeAppliance resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ArcResourceBridgeAppliance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ArcResourceBridgeAppliance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ArcResourceBridgeAppliance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference">ArcResourceBridgeApplianceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference">ArcResourceBridgeApplianceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.distroInput">DistroInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity">ArcResourceBridgeApplianceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.infrastructureProviderInput">InfrastructureProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.publicKeyBase64Input">PublicKeyBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts">ArcResourceBridgeApplianceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.distro">Distro</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.infrastructureProvider">InfrastructureProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.publicKeyBase64">PublicKeyBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.identity"></a>

```csharp
public ArcResourceBridgeApplianceIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference">ArcResourceBridgeApplianceIdentityOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.timeouts"></a>

```csharp
public ArcResourceBridgeApplianceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference">ArcResourceBridgeApplianceTimeoutsOutputReference</a>

---

##### `DistroInput`<sup>Optional</sup> <a name="DistroInput" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.distroInput"></a>

```csharp
public string DistroInput { get; }
```

- *Type:* string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.identityInput"></a>

```csharp
public ArcResourceBridgeApplianceIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity">ArcResourceBridgeApplianceIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InfrastructureProviderInput`<sup>Optional</sup> <a name="InfrastructureProviderInput" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.infrastructureProviderInput"></a>

```csharp
public string InfrastructureProviderInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublicKeyBase64Input`<sup>Optional</sup> <a name="PublicKeyBase64Input" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.publicKeyBase64Input"></a>

```csharp
public string PublicKeyBase64Input { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.timeoutsInput"></a>

```csharp
public IResolvable|ArcResourceBridgeApplianceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts">ArcResourceBridgeApplianceTimeouts</a>

---

##### `Distro`<sup>Required</sup> <a name="Distro" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.distro"></a>

```csharp
public string Distro { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InfrastructureProvider`<sup>Required</sup> <a name="InfrastructureProvider" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.infrastructureProvider"></a>

```csharp
public string InfrastructureProvider { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicKeyBase64`<sup>Required</sup> <a name="PublicKeyBase64" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.publicKeyBase64"></a>

```csharp
public string PublicKeyBase64 { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeAppliance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ArcResourceBridgeApplianceConfig <a name="ArcResourceBridgeApplianceConfig" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ArcResourceBridgeApplianceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Distro,
    ArcResourceBridgeApplianceIdentity Identity,
    string InfrastructureProvider,
    string Location,
    string Name,
    string ResourceGroupName,
    string Id = null,
    string PublicKeyBase64 = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ArcResourceBridgeApplianceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.distro">Distro</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#distro ArcResourceBridgeAppliance#distro}. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity">ArcResourceBridgeApplianceIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.infrastructureProvider">InfrastructureProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#infrastructure_provider ArcResourceBridgeAppliance#infrastructure_provider}. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#location ArcResourceBridgeAppliance#location}. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#name ArcResourceBridgeAppliance#name}. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#resource_group_name ArcResourceBridgeAppliance#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#id ArcResourceBridgeAppliance#id}. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.publicKeyBase64">PublicKeyBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#public_key_base64 ArcResourceBridgeAppliance#public_key_base64}. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#tags ArcResourceBridgeAppliance#tags}. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts">ArcResourceBridgeApplianceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Distro`<sup>Required</sup> <a name="Distro" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.distro"></a>

```csharp
public string Distro { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#distro ArcResourceBridgeAppliance#distro}.

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.identity"></a>

```csharp
public ArcResourceBridgeApplianceIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity">ArcResourceBridgeApplianceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#identity ArcResourceBridgeAppliance#identity}

---

##### `InfrastructureProvider`<sup>Required</sup> <a name="InfrastructureProvider" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.infrastructureProvider"></a>

```csharp
public string InfrastructureProvider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#infrastructure_provider ArcResourceBridgeAppliance#infrastructure_provider}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#location ArcResourceBridgeAppliance#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#name ArcResourceBridgeAppliance#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#resource_group_name ArcResourceBridgeAppliance#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#id ArcResourceBridgeAppliance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PublicKeyBase64`<sup>Optional</sup> <a name="PublicKeyBase64" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.publicKeyBase64"></a>

```csharp
public string PublicKeyBase64 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#public_key_base64 ArcResourceBridgeAppliance#public_key_base64}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#tags ArcResourceBridgeAppliance#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceConfig.property.timeouts"></a>

```csharp
public ArcResourceBridgeApplianceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts">ArcResourceBridgeApplianceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#timeouts ArcResourceBridgeAppliance#timeouts}

---

### ArcResourceBridgeApplianceIdentity <a name="ArcResourceBridgeApplianceIdentity" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ArcResourceBridgeApplianceIdentity {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#type ArcResourceBridgeAppliance#type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#type ArcResourceBridgeAppliance#type}.

---

### ArcResourceBridgeApplianceTimeouts <a name="ArcResourceBridgeApplianceTimeouts" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ArcResourceBridgeApplianceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#create ArcResourceBridgeAppliance#create}. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#delete ArcResourceBridgeAppliance#delete}. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#read ArcResourceBridgeAppliance#read}. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#update ArcResourceBridgeAppliance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#create ArcResourceBridgeAppliance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#delete ArcResourceBridgeAppliance#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#read ArcResourceBridgeAppliance#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/arc_resource_bridge_appliance#update ArcResourceBridgeAppliance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArcResourceBridgeApplianceIdentityOutputReference <a name="ArcResourceBridgeApplianceIdentityOutputReference" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ArcResourceBridgeApplianceIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity">ArcResourceBridgeApplianceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentityOutputReference.property.internalValue"></a>

```csharp
public ArcResourceBridgeApplianceIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceIdentity">ArcResourceBridgeApplianceIdentity</a>

---


### ArcResourceBridgeApplianceTimeoutsOutputReference <a name="ArcResourceBridgeApplianceTimeoutsOutputReference" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ArcResourceBridgeApplianceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts">ArcResourceBridgeApplianceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ArcResourceBridgeApplianceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.arcResourceBridgeAppliance.ArcResourceBridgeApplianceTimeouts">ArcResourceBridgeApplianceTimeouts</a>

---



