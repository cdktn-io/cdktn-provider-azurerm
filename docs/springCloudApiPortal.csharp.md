# `springCloudApiPortal` Submodule <a name="`springCloudApiPortal` Submodule" id="@cdktn/provider-azurerm.springCloudApiPortal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudApiPortal <a name="SpringCloudApiPortal" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal azurerm_spring_cloud_api_portal}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SpringCloudApiPortal(Construct Scope, string Id, SpringCloudApiPortalConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig">SpringCloudApiPortalConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig">SpringCloudApiPortalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.putSso">PutSso</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetApiTryOutEnabled">ResetApiTryOutEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetGatewayIds">ResetGatewayIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetHttpsOnlyEnabled">ResetHttpsOnlyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetSso">ResetSso</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSso` <a name="PutSso" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.putSso"></a>

```csharp
private void PutSso(SpringCloudApiPortalSso Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.putSso.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso">SpringCloudApiPortalSso</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.putTimeouts"></a>

```csharp
private void PutTimeouts(SpringCloudApiPortalTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts">SpringCloudApiPortalTimeouts</a>

---

##### `ResetApiTryOutEnabled` <a name="ResetApiTryOutEnabled" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetApiTryOutEnabled"></a>

```csharp
private void ResetApiTryOutEnabled()
```

##### `ResetGatewayIds` <a name="ResetGatewayIds" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetGatewayIds"></a>

```csharp
private void ResetGatewayIds()
```

##### `ResetHttpsOnlyEnabled` <a name="ResetHttpsOnlyEnabled" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetHttpsOnlyEnabled"></a>

```csharp
private void ResetHttpsOnlyEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetInstanceCount"></a>

```csharp
private void ResetInstanceCount()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetPublicNetworkAccessEnabled"></a>

```csharp
private void ResetPublicNetworkAccessEnabled()
```

##### `ResetSso` <a name="ResetSso" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetSso"></a>

```csharp
private void ResetSso()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SpringCloudApiPortal resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SpringCloudApiPortal.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SpringCloudApiPortal.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SpringCloudApiPortal.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SpringCloudApiPortal.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SpringCloudApiPortal resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpringCloudApiPortal to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpringCloudApiPortal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SpringCloudApiPortal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.sso">Sso</a></code> | <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference">SpringCloudApiPortalSsoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference">SpringCloudApiPortalTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.apiTryOutEnabledInput">ApiTryOutEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.gatewayIdsInput">GatewayIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.httpsOnlyEnabledInput">HttpsOnlyEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.instanceCountInput">InstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.springCloudServiceIdInput">SpringCloudServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.ssoInput">SsoInput</a></code> | <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso">SpringCloudApiPortalSso</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts">SpringCloudApiPortalTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.apiTryOutEnabled">ApiTryOutEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.gatewayIds">GatewayIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.httpsOnlyEnabled">HttpsOnlyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.springCloudServiceId">SpringCloudServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Sso`<sup>Required</sup> <a name="Sso" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.sso"></a>

```csharp
public SpringCloudApiPortalSsoOutputReference Sso { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference">SpringCloudApiPortalSsoOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.timeouts"></a>

```csharp
public SpringCloudApiPortalTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference">SpringCloudApiPortalTimeoutsOutputReference</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `ApiTryOutEnabledInput`<sup>Optional</sup> <a name="ApiTryOutEnabledInput" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.apiTryOutEnabledInput"></a>

```csharp
public bool|IResolvable ApiTryOutEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GatewayIdsInput`<sup>Optional</sup> <a name="GatewayIdsInput" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.gatewayIdsInput"></a>

```csharp
public string[] GatewayIdsInput { get; }
```

- *Type:* string[]

---

##### `HttpsOnlyEnabledInput`<sup>Optional</sup> <a name="HttpsOnlyEnabledInput" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.httpsOnlyEnabledInput"></a>

```csharp
public bool|IResolvable HttpsOnlyEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.instanceCountInput"></a>

```csharp
public double InstanceCountInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.publicNetworkAccessEnabledInput"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SpringCloudServiceIdInput`<sup>Optional</sup> <a name="SpringCloudServiceIdInput" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.springCloudServiceIdInput"></a>

```csharp
public string SpringCloudServiceIdInput { get; }
```

- *Type:* string

---

##### `SsoInput`<sup>Optional</sup> <a name="SsoInput" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.ssoInput"></a>

```csharp
public SpringCloudApiPortalSso SsoInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso">SpringCloudApiPortalSso</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.timeoutsInput"></a>

```csharp
public IResolvable|SpringCloudApiPortalTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts">SpringCloudApiPortalTimeouts</a>

---

##### `ApiTryOutEnabled`<sup>Required</sup> <a name="ApiTryOutEnabled" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.apiTryOutEnabled"></a>

```csharp
public bool|IResolvable ApiTryOutEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GatewayIds`<sup>Required</sup> <a name="GatewayIds" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.gatewayIds"></a>

```csharp
public string[] GatewayIds { get; }
```

- *Type:* string[]

---

##### `HttpsOnlyEnabled`<sup>Required</sup> <a name="HttpsOnlyEnabled" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.httpsOnlyEnabled"></a>

```csharp
public bool|IResolvable HttpsOnlyEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.publicNetworkAccessEnabled"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SpringCloudServiceId`<sup>Required</sup> <a name="SpringCloudServiceId" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.springCloudServiceId"></a>

```csharp
public string SpringCloudServiceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortal.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudApiPortalConfig <a name="SpringCloudApiPortalConfig" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SpringCloudApiPortalConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string SpringCloudServiceId,
    bool|IResolvable ApiTryOutEnabled = null,
    string[] GatewayIds = null,
    bool|IResolvable HttpsOnlyEnabled = null,
    string Id = null,
    double InstanceCount = null,
    bool|IResolvable PublicNetworkAccessEnabled = null,
    SpringCloudApiPortalSso Sso = null,
    SpringCloudApiPortalTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#name SpringCloudApiPortal#name}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.springCloudServiceId">SpringCloudServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#spring_cloud_service_id SpringCloudApiPortal#spring_cloud_service_id}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.apiTryOutEnabled">ApiTryOutEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#api_try_out_enabled SpringCloudApiPortal#api_try_out_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.gatewayIds">GatewayIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#gateway_ids SpringCloudApiPortal#gateway_ids}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.httpsOnlyEnabled">HttpsOnlyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#https_only_enabled SpringCloudApiPortal#https_only_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#id SpringCloudApiPortal#id}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.instanceCount">InstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#instance_count SpringCloudApiPortal#instance_count}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#public_network_access_enabled SpringCloudApiPortal#public_network_access_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.sso">Sso</a></code> | <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso">SpringCloudApiPortalSso</a></code> | sso block. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts">SpringCloudApiPortalTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#name SpringCloudApiPortal#name}.

---

##### `SpringCloudServiceId`<sup>Required</sup> <a name="SpringCloudServiceId" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.springCloudServiceId"></a>

```csharp
public string SpringCloudServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#spring_cloud_service_id SpringCloudApiPortal#spring_cloud_service_id}.

---

##### `ApiTryOutEnabled`<sup>Optional</sup> <a name="ApiTryOutEnabled" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.apiTryOutEnabled"></a>

```csharp
public bool|IResolvable ApiTryOutEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#api_try_out_enabled SpringCloudApiPortal#api_try_out_enabled}.

---

##### `GatewayIds`<sup>Optional</sup> <a name="GatewayIds" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.gatewayIds"></a>

```csharp
public string[] GatewayIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#gateway_ids SpringCloudApiPortal#gateway_ids}.

---

##### `HttpsOnlyEnabled`<sup>Optional</sup> <a name="HttpsOnlyEnabled" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.httpsOnlyEnabled"></a>

```csharp
public bool|IResolvable HttpsOnlyEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#https_only_enabled SpringCloudApiPortal#https_only_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#id SpringCloudApiPortal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.instanceCount"></a>

```csharp
public double InstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#instance_count SpringCloudApiPortal#instance_count}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.publicNetworkAccessEnabled"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#public_network_access_enabled SpringCloudApiPortal#public_network_access_enabled}.

---

##### `Sso`<sup>Optional</sup> <a name="Sso" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.sso"></a>

```csharp
public SpringCloudApiPortalSso Sso { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso">SpringCloudApiPortalSso</a>

sso block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#sso SpringCloudApiPortal#sso}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalConfig.property.timeouts"></a>

```csharp
public SpringCloudApiPortalTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts">SpringCloudApiPortalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#timeouts SpringCloudApiPortal#timeouts}

---

### SpringCloudApiPortalSso <a name="SpringCloudApiPortalSso" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SpringCloudApiPortalSso {
    string ClientId = null,
    string ClientSecret = null,
    string IssuerUri = null,
    string[] Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#client_id SpringCloudApiPortal#client_id}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#client_secret SpringCloudApiPortal#client_secret}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso.property.issuerUri">IssuerUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#issuer_uri SpringCloudApiPortal#issuer_uri}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso.property.scope">Scope</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#scope SpringCloudApiPortal#scope}. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#client_id SpringCloudApiPortal#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#client_secret SpringCloudApiPortal#client_secret}.

---

##### `IssuerUri`<sup>Optional</sup> <a name="IssuerUri" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso.property.issuerUri"></a>

```csharp
public string IssuerUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#issuer_uri SpringCloudApiPortal#issuer_uri}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso.property.scope"></a>

```csharp
public string[] Scope { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#scope SpringCloudApiPortal#scope}.

---

### SpringCloudApiPortalTimeouts <a name="SpringCloudApiPortalTimeouts" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SpringCloudApiPortalTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#create SpringCloudApiPortal#create}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#delete SpringCloudApiPortal#delete}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#read SpringCloudApiPortal#read}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#update SpringCloudApiPortal#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#create SpringCloudApiPortal#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#delete SpringCloudApiPortal#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#read SpringCloudApiPortal#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/spring_cloud_api_portal#update SpringCloudApiPortal#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudApiPortalSsoOutputReference <a name="SpringCloudApiPortalSsoOutputReference" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SpringCloudApiPortalSsoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.resetIssuerUri">ResetIssuerUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetIssuerUri` <a name="ResetIssuerUri" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.resetIssuerUri"></a>

```csharp
private void ResetIssuerUri()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.issuerUriInput">IssuerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.issuerUri">IssuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.scope">Scope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso">SpringCloudApiPortalSso</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `IssuerUriInput`<sup>Optional</sup> <a name="IssuerUriInput" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.issuerUriInput"></a>

```csharp
public string IssuerUriInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.scopeInput"></a>

```csharp
public string[] ScopeInput { get; }
```

- *Type:* string[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.issuerUri"></a>

```csharp
public string IssuerUri { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.scope"></a>

```csharp
public string[] Scope { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSsoOutputReference.property.internalValue"></a>

```csharp
public SpringCloudApiPortalSso InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalSso">SpringCloudApiPortalSso</a>

---


### SpringCloudApiPortalTimeoutsOutputReference <a name="SpringCloudApiPortalTimeoutsOutputReference" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SpringCloudApiPortalTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts">SpringCloudApiPortalTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SpringCloudApiPortalTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.springCloudApiPortal.SpringCloudApiPortalTimeouts">SpringCloudApiPortalTimeouts</a>

---



