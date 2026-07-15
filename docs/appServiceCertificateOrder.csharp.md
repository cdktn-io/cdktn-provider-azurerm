# `appServiceCertificateOrder` Submodule <a name="`appServiceCertificateOrder` Submodule" id="@cdktn/provider-azurerm.appServiceCertificateOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceCertificateOrder <a name="AppServiceCertificateOrder" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order azurerm_app_service_certificate_order}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new AppServiceCertificateOrder(Construct Scope, string Id, AppServiceCertificateOrderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig">AppServiceCertificateOrderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig">AppServiceCertificateOrderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetAutoRenew">ResetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetCsr">ResetCsr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetDistinguishedName">ResetDistinguishedName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetKeySize">ResetKeySize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetProductType">ResetProductType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetValidityInYears">ResetValidityInYears</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.putTimeouts"></a>

```csharp
private void PutTimeouts(AppServiceCertificateOrderTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a>

---

##### `ResetAutoRenew` <a name="ResetAutoRenew" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetAutoRenew"></a>

```csharp
private void ResetAutoRenew()
```

##### `ResetCsr` <a name="ResetCsr" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetCsr"></a>

```csharp
private void ResetCsr()
```

##### `ResetDistinguishedName` <a name="ResetDistinguishedName" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetDistinguishedName"></a>

```csharp
private void ResetDistinguishedName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeySize` <a name="ResetKeySize" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetKeySize"></a>

```csharp
private void ResetKeySize()
```

##### `ResetProductType` <a name="ResetProductType" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetProductType"></a>

```csharp
private void ResetProductType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetValidityInYears` <a name="ResetValidityInYears" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.resetValidityInYears"></a>

```csharp
private void ResetValidityInYears()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppServiceCertificateOrder resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

AppServiceCertificateOrder.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

AppServiceCertificateOrder.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

AppServiceCertificateOrder.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

AppServiceCertificateOrder.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppServiceCertificateOrder resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppServiceCertificateOrder to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppServiceCertificateOrder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppServiceCertificateOrder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.appServiceCertificateNotRenewableReasons">AppServiceCertificateNotRenewableReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.certificates">Certificates</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList">AppServiceCertificateOrderCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.domainVerificationToken">DomainVerificationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.expirationTime">ExpirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.intermediateThumbprint">IntermediateThumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.isPrivateKeyExternal">IsPrivateKeyExternal</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.rootThumbprint">RootThumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.signedCertificateThumbprint">SignedCertificateThumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference">AppServiceCertificateOrderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.autoRenewInput">AutoRenewInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.csrInput">CsrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.distinguishedNameInput">DistinguishedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.keySizeInput">KeySizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.productTypeInput">ProductTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.validityInYearsInput">ValidityInYearsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.autoRenew">AutoRenew</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.csr">Csr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.distinguishedName">DistinguishedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.keySize">KeySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.productType">ProductType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.validityInYears">ValidityInYears</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AppServiceCertificateNotRenewableReasons`<sup>Required</sup> <a name="AppServiceCertificateNotRenewableReasons" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.appServiceCertificateNotRenewableReasons"></a>

```csharp
public string[] AppServiceCertificateNotRenewableReasons { get; }
```

- *Type:* string[]

---

##### `Certificates`<sup>Required</sup> <a name="Certificates" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.certificates"></a>

```csharp
public AppServiceCertificateOrderCertificatesList Certificates { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList">AppServiceCertificateOrderCertificatesList</a>

---

##### `DomainVerificationToken`<sup>Required</sup> <a name="DomainVerificationToken" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.domainVerificationToken"></a>

```csharp
public string DomainVerificationToken { get; }
```

- *Type:* string

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.expirationTime"></a>

```csharp
public string ExpirationTime { get; }
```

- *Type:* string

---

##### `IntermediateThumbprint`<sup>Required</sup> <a name="IntermediateThumbprint" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.intermediateThumbprint"></a>

```csharp
public string IntermediateThumbprint { get; }
```

- *Type:* string

---

##### `IsPrivateKeyExternal`<sup>Required</sup> <a name="IsPrivateKeyExternal" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.isPrivateKeyExternal"></a>

```csharp
public IResolvable IsPrivateKeyExternal { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RootThumbprint`<sup>Required</sup> <a name="RootThumbprint" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.rootThumbprint"></a>

```csharp
public string RootThumbprint { get; }
```

- *Type:* string

---

##### `SignedCertificateThumbprint`<sup>Required</sup> <a name="SignedCertificateThumbprint" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.signedCertificateThumbprint"></a>

```csharp
public string SignedCertificateThumbprint { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.timeouts"></a>

```csharp
public AppServiceCertificateOrderTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference">AppServiceCertificateOrderTimeoutsOutputReference</a>

---

##### `AutoRenewInput`<sup>Optional</sup> <a name="AutoRenewInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.autoRenewInput"></a>

```csharp
public bool|IResolvable AutoRenewInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CsrInput`<sup>Optional</sup> <a name="CsrInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.csrInput"></a>

```csharp
public string CsrInput { get; }
```

- *Type:* string

---

##### `DistinguishedNameInput`<sup>Optional</sup> <a name="DistinguishedNameInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.distinguishedNameInput"></a>

```csharp
public string DistinguishedNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeySizeInput`<sup>Optional</sup> <a name="KeySizeInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.keySizeInput"></a>

```csharp
public double KeySizeInput { get; }
```

- *Type:* double

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProductTypeInput`<sup>Optional</sup> <a name="ProductTypeInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.productTypeInput"></a>

```csharp
public string ProductTypeInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.timeoutsInput"></a>

```csharp
public IResolvable|AppServiceCertificateOrderTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a>

---

##### `ValidityInYearsInput`<sup>Optional</sup> <a name="ValidityInYearsInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.validityInYearsInput"></a>

```csharp
public double ValidityInYearsInput { get; }
```

- *Type:* double

---

##### `AutoRenew`<sup>Required</sup> <a name="AutoRenew" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.autoRenew"></a>

```csharp
public bool|IResolvable AutoRenew { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Csr`<sup>Required</sup> <a name="Csr" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.csr"></a>

```csharp
public string Csr { get; }
```

- *Type:* string

---

##### `DistinguishedName`<sup>Required</sup> <a name="DistinguishedName" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.distinguishedName"></a>

```csharp
public string DistinguishedName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeySize`<sup>Required</sup> <a name="KeySize" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.keySize"></a>

```csharp
public double KeySize { get; }
```

- *Type:* double

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProductType`<sup>Required</sup> <a name="ProductType" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.productType"></a>

```csharp
public string ProductType { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ValidityInYears`<sup>Required</sup> <a name="ValidityInYears" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.validityInYears"></a>

```csharp
public double ValidityInYears { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrder.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceCertificateOrderCertificates <a name="AppServiceCertificateOrderCertificates" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificates.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new AppServiceCertificateOrderCertificates {

};
```


### AppServiceCertificateOrderConfig <a name="AppServiceCertificateOrderConfig" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new AppServiceCertificateOrderConfig {
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
    bool|IResolvable AutoRenew = null,
    string Csr = null,
    string DistinguishedName = null,
    string Id = null,
    double KeySize = null,
    string ProductType = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    AppServiceCertificateOrderTimeouts Timeouts = null,
    double ValidityInYears = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#location AppServiceCertificateOrder#location}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#name AppServiceCertificateOrder#name}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#resource_group_name AppServiceCertificateOrder#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.autoRenew">AutoRenew</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#auto_renew AppServiceCertificateOrder#auto_renew}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.csr">Csr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#csr AppServiceCertificateOrder#csr}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.distinguishedName">DistinguishedName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#distinguished_name AppServiceCertificateOrder#distinguished_name}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#id AppServiceCertificateOrder#id}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.keySize">KeySize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#key_size AppServiceCertificateOrder#key_size}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.productType">ProductType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#product_type AppServiceCertificateOrder#product_type}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#tags AppServiceCertificateOrder#tags}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.validityInYears">ValidityInYears</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#validity_in_years AppServiceCertificateOrder#validity_in_years}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#location AppServiceCertificateOrder#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#name AppServiceCertificateOrder#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#resource_group_name AppServiceCertificateOrder#resource_group_name}.

---

##### `AutoRenew`<sup>Optional</sup> <a name="AutoRenew" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.autoRenew"></a>

```csharp
public bool|IResolvable AutoRenew { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#auto_renew AppServiceCertificateOrder#auto_renew}.

---

##### `Csr`<sup>Optional</sup> <a name="Csr" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.csr"></a>

```csharp
public string Csr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#csr AppServiceCertificateOrder#csr}.

---

##### `DistinguishedName`<sup>Optional</sup> <a name="DistinguishedName" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.distinguishedName"></a>

```csharp
public string DistinguishedName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#distinguished_name AppServiceCertificateOrder#distinguished_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#id AppServiceCertificateOrder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeySize`<sup>Optional</sup> <a name="KeySize" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.keySize"></a>

```csharp
public double KeySize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#key_size AppServiceCertificateOrder#key_size}.

---

##### `ProductType`<sup>Optional</sup> <a name="ProductType" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.productType"></a>

```csharp
public string ProductType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#product_type AppServiceCertificateOrder#product_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#tags AppServiceCertificateOrder#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.timeouts"></a>

```csharp
public AppServiceCertificateOrderTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#timeouts AppServiceCertificateOrder#timeouts}

---

##### `ValidityInYears`<sup>Optional</sup> <a name="ValidityInYears" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderConfig.property.validityInYears"></a>

```csharp
public double ValidityInYears { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#validity_in_years AppServiceCertificateOrder#validity_in_years}.

---

### AppServiceCertificateOrderTimeouts <a name="AppServiceCertificateOrderTimeouts" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new AppServiceCertificateOrderTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#create AppServiceCertificateOrder#create}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#delete AppServiceCertificateOrder#delete}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#read AppServiceCertificateOrder#read}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#update AppServiceCertificateOrder#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#create AppServiceCertificateOrder#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#delete AppServiceCertificateOrder#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#read AppServiceCertificateOrder#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/app_service_certificate_order#update AppServiceCertificateOrder#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceCertificateOrderCertificatesList <a name="AppServiceCertificateOrderCertificatesList" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new AppServiceCertificateOrderCertificatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.get"></a>

```csharp
private AppServiceCertificateOrderCertificatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### AppServiceCertificateOrderCertificatesOutputReference <a name="AppServiceCertificateOrderCertificatesOutputReference" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new AppServiceCertificateOrderCertificatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.certificateName">CertificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.keyVaultSecretName">KeyVaultSecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.provisioningState">ProvisioningState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificates">AppServiceCertificateOrderCertificates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.certificateName"></a>

```csharp
public string CertificateName { get; }
```

- *Type:* string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; }
```

- *Type:* string

---

##### `KeyVaultSecretName`<sup>Required</sup> <a name="KeyVaultSecretName" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.keyVaultSecretName"></a>

```csharp
public string KeyVaultSecretName { get; }
```

- *Type:* string

---

##### `ProvisioningState`<sup>Required</sup> <a name="ProvisioningState" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.provisioningState"></a>

```csharp
public string ProvisioningState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificatesOutputReference.property.internalValue"></a>

```csharp
public AppServiceCertificateOrderCertificates InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderCertificates">AppServiceCertificateOrderCertificates</a>

---


### AppServiceCertificateOrderTimeoutsOutputReference <a name="AppServiceCertificateOrderTimeoutsOutputReference" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new AppServiceCertificateOrderTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppServiceCertificateOrderTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.appServiceCertificateOrder.AppServiceCertificateOrderTimeouts">AppServiceCertificateOrderTimeouts</a>

---



