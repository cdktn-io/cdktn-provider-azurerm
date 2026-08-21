# `apiManagementSubscription` Submodule <a name="`apiManagementSubscription` Submodule" id="@cdktn/provider-azurerm.apiManagementSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementSubscription <a name="ApiManagementSubscription" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription azurerm_api_management_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ApiManagementSubscription(Construct Scope, string Id, ApiManagementSubscriptionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig">ApiManagementSubscriptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig">ApiManagementSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.resetAllowTracing">ResetAllowTracing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.resetApiId">ResetApiId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.resetPrimaryKey">ResetPrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.resetProductId">ResetProductId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.resetSecondaryKey">ResetSecondaryKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.putTimeouts"></a>

```csharp
private void PutTimeouts(ApiManagementSubscriptionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeouts">ApiManagementSubscriptionTimeouts</a>

---

##### `ResetAllowTracing` <a name="ResetAllowTracing" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.resetAllowTracing"></a>

```csharp
private void ResetAllowTracing()
```

##### `ResetApiId` <a name="ResetApiId" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.resetApiId"></a>

```csharp
private void ResetApiId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrimaryKey` <a name="ResetPrimaryKey" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.resetPrimaryKey"></a>

```csharp
private void ResetPrimaryKey()
```

##### `ResetProductId` <a name="ResetProductId" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.resetProductId"></a>

```csharp
private void ResetProductId()
```

##### `ResetSecondaryKey` <a name="ResetSecondaryKey" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.resetSecondaryKey"></a>

```csharp
private void ResetSecondaryKey()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.resetSubscriptionId"></a>

```csharp
private void ResetSubscriptionId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.resetUserId"></a>

```csharp
private void ResetUserId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApiManagementSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ApiManagementSubscription.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ApiManagementSubscription.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ApiManagementSubscription.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ApiManagementSubscription.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApiManagementSubscription resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiManagementSubscription to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiManagementSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApiManagementSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference">ApiManagementSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.allowTracingInput">AllowTracingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.apiIdInput">ApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.apiManagementNameInput">ApiManagementNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.primaryKeyInput">PrimaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.productIdInput">ProductIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.secondaryKeyInput">SecondaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeouts">ApiManagementSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.allowTracing">AllowTracing</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.apiId">ApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.apiManagementName">ApiManagementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.productId">ProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.secondaryKey">SecondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.userId">UserId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.timeouts"></a>

```csharp
public ApiManagementSubscriptionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference">ApiManagementSubscriptionTimeoutsOutputReference</a>

---

##### `AllowTracingInput`<sup>Optional</sup> <a name="AllowTracingInput" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.allowTracingInput"></a>

```csharp
public bool|IResolvable AllowTracingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.apiIdInput"></a>

```csharp
public string ApiIdInput { get; }
```

- *Type:* string

---

##### `ApiManagementNameInput`<sup>Optional</sup> <a name="ApiManagementNameInput" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.apiManagementNameInput"></a>

```csharp
public string ApiManagementNameInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrimaryKeyInput`<sup>Optional</sup> <a name="PrimaryKeyInput" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.primaryKeyInput"></a>

```csharp
public string PrimaryKeyInput { get; }
```

- *Type:* string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.productIdInput"></a>

```csharp
public string ProductIdInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SecondaryKeyInput`<sup>Optional</sup> <a name="SecondaryKeyInput" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.secondaryKeyInput"></a>

```csharp
public string SecondaryKeyInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.timeoutsInput"></a>

```csharp
public IResolvable|ApiManagementSubscriptionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeouts">ApiManagementSubscriptionTimeouts</a>

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `AllowTracing`<sup>Required</sup> <a name="AllowTracing" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.allowTracing"></a>

```csharp
public bool|IResolvable AllowTracing { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.apiId"></a>

```csharp
public string ApiId { get; }
```

- *Type:* string

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.apiManagementName"></a>

```csharp
public string ApiManagementName { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; }
```

- *Type:* string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.productId"></a>

```csharp
public string ProductId { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SecondaryKey`<sup>Required</sup> <a name="SecondaryKey" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.secondaryKey"></a>

```csharp
public string SecondaryKey { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscription.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementSubscriptionConfig <a name="ApiManagementSubscriptionConfig" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ApiManagementSubscriptionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApiManagementName,
    string DisplayName,
    string ResourceGroupName,
    bool|IResolvable AllowTracing = null,
    string ApiId = null,
    string Id = null,
    string PrimaryKey = null,
    string ProductId = null,
    string SecondaryKey = null,
    string State = null,
    string SubscriptionId = null,
    ApiManagementSubscriptionTimeouts Timeouts = null,
    string UserId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.apiManagementName">ApiManagementName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#api_management_name ApiManagementSubscription#api_management_name}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#display_name ApiManagementSubscription#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#resource_group_name ApiManagementSubscription#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.allowTracing">AllowTracing</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#allow_tracing ApiManagementSubscription#allow_tracing}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.apiId">ApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#api_id ApiManagementSubscription#api_id}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#id ApiManagementSubscription#id}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#primary_key ApiManagementSubscription#primary_key}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.productId">ProductId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#product_id ApiManagementSubscription#product_id}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.secondaryKey">SecondaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#secondary_key ApiManagementSubscription#secondary_key}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#state ApiManagementSubscription#state}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#subscription_id ApiManagementSubscription#subscription_id}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeouts">ApiManagementSubscriptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.userId">UserId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#user_id ApiManagementSubscription#user_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiManagementName`<sup>Required</sup> <a name="ApiManagementName" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.apiManagementName"></a>

```csharp
public string ApiManagementName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#api_management_name ApiManagementSubscription#api_management_name}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#display_name ApiManagementSubscription#display_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#resource_group_name ApiManagementSubscription#resource_group_name}.

---

##### `AllowTracing`<sup>Optional</sup> <a name="AllowTracing" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.allowTracing"></a>

```csharp
public bool|IResolvable AllowTracing { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#allow_tracing ApiManagementSubscription#allow_tracing}.

---

##### `ApiId`<sup>Optional</sup> <a name="ApiId" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.apiId"></a>

```csharp
public string ApiId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#api_id ApiManagementSubscription#api_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#id ApiManagementSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrimaryKey`<sup>Optional</sup> <a name="PrimaryKey" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#primary_key ApiManagementSubscription#primary_key}.

---

##### `ProductId`<sup>Optional</sup> <a name="ProductId" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.productId"></a>

```csharp
public string ProductId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#product_id ApiManagementSubscription#product_id}.

---

##### `SecondaryKey`<sup>Optional</sup> <a name="SecondaryKey" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.secondaryKey"></a>

```csharp
public string SecondaryKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#secondary_key ApiManagementSubscription#secondary_key}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#state ApiManagementSubscription#state}.

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#subscription_id ApiManagementSubscription#subscription_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.timeouts"></a>

```csharp
public ApiManagementSubscriptionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeouts">ApiManagementSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#timeouts ApiManagementSubscription#timeouts}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionConfig.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#user_id ApiManagementSubscription#user_id}.

---

### ApiManagementSubscriptionTimeouts <a name="ApiManagementSubscriptionTimeouts" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ApiManagementSubscriptionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#create ApiManagementSubscription#create}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#delete ApiManagementSubscription#delete}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#read ApiManagementSubscription#read}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#update ApiManagementSubscription#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#create ApiManagementSubscription#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#delete ApiManagementSubscription#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#read ApiManagementSubscription#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_subscription#update ApiManagementSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementSubscriptionTimeoutsOutputReference <a name="ApiManagementSubscriptionTimeoutsOutputReference" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ApiManagementSubscriptionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeouts">ApiManagementSubscriptionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiManagementSubscriptionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.apiManagementSubscription.ApiManagementSubscriptionTimeouts">ApiManagementSubscriptionTimeouts</a>

---



