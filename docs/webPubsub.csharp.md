# `webPubsub` Submodule <a name="`webPubsub` Submodule" id="@cdktn/provider-azurerm.webPubsub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebPubsub <a name="WebPubsub" id="@cdktn/provider-azurerm.webPubsub.WebPubsub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub azurerm_web_pubsub}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new WebPubsub(Construct Scope, string Id, WebPubsubConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig">WebPubsubConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig">WebPubsubConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.putLiveTrace">PutLiveTrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.resetAadAuthEnabled">ResetAadAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.resetCapacity">ResetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.resetLiveTrace">ResetLiveTrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.resetLocalAuthEnabled">ResetLocalAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.resetTlsClientCertEnabled">ResetTlsClientCertEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.putIdentity"></a>

```csharp
private void PutIdentity(WebPubsubIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a>

---

##### `PutLiveTrace` <a name="PutLiveTrace" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.putLiveTrace"></a>

```csharp
private void PutLiveTrace(WebPubsubLiveTrace Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.putLiveTrace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.putTimeouts"></a>

```csharp
private void PutTimeouts(WebPubsubTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts">WebPubsubTimeouts</a>

---

##### `ResetAadAuthEnabled` <a name="ResetAadAuthEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.resetAadAuthEnabled"></a>

```csharp
private void ResetAadAuthEnabled()
```

##### `ResetCapacity` <a name="ResetCapacity" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.resetCapacity"></a>

```csharp
private void ResetCapacity()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetLiveTrace` <a name="ResetLiveTrace" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.resetLiveTrace"></a>

```csharp
private void ResetLiveTrace()
```

##### `ResetLocalAuthEnabled` <a name="ResetLocalAuthEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.resetLocalAuthEnabled"></a>

```csharp
private void ResetLocalAuthEnabled()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.resetPublicNetworkAccessEnabled"></a>

```csharp
private void ResetPublicNetworkAccessEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTlsClientCertEnabled` <a name="ResetTlsClientCertEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.resetTlsClientCertEnabled"></a>

```csharp
private void ResetTlsClientCertEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WebPubsub resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

WebPubsub.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

WebPubsub.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

WebPubsub.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

WebPubsub.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WebPubsub resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WebPubsub to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WebPubsub that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WebPubsub to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.externalIp">ExternalIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference">WebPubsubIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.liveTrace">LiveTrace</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference">WebPubsubLiveTraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.primaryAccessKey">PrimaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.primaryConnectionString">PrimaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.publicPort">PublicPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.secondaryAccessKey">SecondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.secondaryConnectionString">SecondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.serverPort">ServerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference">WebPubsubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.aadAuthEnabledInput">AadAuthEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.capacityInput">CapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.liveTraceInput">LiveTraceInput</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.localAuthEnabledInput">LocalAuthEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts">WebPubsubTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.tlsClientCertEnabledInput">TlsClientCertEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.aadAuthEnabled">AadAuthEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.capacity">Capacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.tlsClientCertEnabled">TlsClientCertEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ExternalIp`<sup>Required</sup> <a name="ExternalIp" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.externalIp"></a>

```csharp
public string ExternalIp { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.identity"></a>

```csharp
public WebPubsubIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference">WebPubsubIdentityOutputReference</a>

---

##### `LiveTrace`<sup>Required</sup> <a name="LiveTrace" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.liveTrace"></a>

```csharp
public WebPubsubLiveTraceOutputReference LiveTrace { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference">WebPubsubLiveTraceOutputReference</a>

---

##### `PrimaryAccessKey`<sup>Required</sup> <a name="PrimaryAccessKey" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.primaryAccessKey"></a>

```csharp
public string PrimaryAccessKey { get; }
```

- *Type:* string

---

##### `PrimaryConnectionString`<sup>Required</sup> <a name="PrimaryConnectionString" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.primaryConnectionString"></a>

```csharp
public string PrimaryConnectionString { get; }
```

- *Type:* string

---

##### `PublicPort`<sup>Required</sup> <a name="PublicPort" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.publicPort"></a>

```csharp
public double PublicPort { get; }
```

- *Type:* double

---

##### `SecondaryAccessKey`<sup>Required</sup> <a name="SecondaryAccessKey" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.secondaryAccessKey"></a>

```csharp
public string SecondaryAccessKey { get; }
```

- *Type:* string

---

##### `SecondaryConnectionString`<sup>Required</sup> <a name="SecondaryConnectionString" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.secondaryConnectionString"></a>

```csharp
public string SecondaryConnectionString { get; }
```

- *Type:* string

---

##### `ServerPort`<sup>Required</sup> <a name="ServerPort" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.serverPort"></a>

```csharp
public double ServerPort { get; }
```

- *Type:* double

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.timeouts"></a>

```csharp
public WebPubsubTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference">WebPubsubTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `AadAuthEnabledInput`<sup>Optional</sup> <a name="AadAuthEnabledInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.aadAuthEnabledInput"></a>

```csharp
public bool|IResolvable AadAuthEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.capacityInput"></a>

```csharp
public double CapacityInput { get; }
```

- *Type:* double

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.identityInput"></a>

```csharp
public WebPubsubIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LiveTraceInput`<sup>Optional</sup> <a name="LiveTraceInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.liveTraceInput"></a>

```csharp
public WebPubsubLiveTrace LiveTraceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a>

---

##### `LocalAuthEnabledInput`<sup>Optional</sup> <a name="LocalAuthEnabledInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.localAuthEnabledInput"></a>

```csharp
public bool|IResolvable LocalAuthEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.publicNetworkAccessEnabledInput"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.timeoutsInput"></a>

```csharp
public IResolvable|WebPubsubTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts">WebPubsubTimeouts</a>

---

##### `TlsClientCertEnabledInput`<sup>Optional</sup> <a name="TlsClientCertEnabledInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.tlsClientCertEnabledInput"></a>

```csharp
public bool|IResolvable TlsClientCertEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AadAuthEnabled`<sup>Required</sup> <a name="AadAuthEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.aadAuthEnabled"></a>

```csharp
public bool|IResolvable AadAuthEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.capacity"></a>

```csharp
public double Capacity { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocalAuthEnabled`<sup>Required</sup> <a name="LocalAuthEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.localAuthEnabled"></a>

```csharp
public bool|IResolvable LocalAuthEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.publicNetworkAccessEnabled"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TlsClientCertEnabled`<sup>Required</sup> <a name="TlsClientCertEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.tlsClientCertEnabled"></a>

```csharp
public bool|IResolvable TlsClientCertEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsub.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.webPubsub.WebPubsub.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WebPubsubConfig <a name="WebPubsubConfig" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new WebPubsubConfig {
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
    string Sku,
    bool|IResolvable AadAuthEnabled = null,
    double Capacity = null,
    string Id = null,
    WebPubsubIdentity Identity = null,
    WebPubsubLiveTrace LiveTrace = null,
    bool|IResolvable LocalAuthEnabled = null,
    bool|IResolvable PublicNetworkAccessEnabled = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    WebPubsubTimeouts Timeouts = null,
    bool|IResolvable TlsClientCertEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#location WebPubsub#location}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#name WebPubsub#name}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#resource_group_name WebPubsub#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#sku WebPubsub#sku}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.aadAuthEnabled">AadAuthEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#aad_auth_enabled WebPubsub#aad_auth_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.capacity">Capacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#capacity WebPubsub#capacity}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#id WebPubsub#id}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.liveTrace">LiveTrace</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a></code> | live_trace block. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#local_auth_enabled WebPubsub#local_auth_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#public_network_access_enabled WebPubsub#public_network_access_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#tags WebPubsub#tags}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts">WebPubsubTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.tlsClientCertEnabled">TlsClientCertEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#tls_client_cert_enabled WebPubsub#tls_client_cert_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#location WebPubsub#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#name WebPubsub#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#resource_group_name WebPubsub#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#sku WebPubsub#sku}.

---

##### `AadAuthEnabled`<sup>Optional</sup> <a name="AadAuthEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.aadAuthEnabled"></a>

```csharp
public bool|IResolvable AadAuthEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#aad_auth_enabled WebPubsub#aad_auth_enabled}.

---

##### `Capacity`<sup>Optional</sup> <a name="Capacity" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.capacity"></a>

```csharp
public double Capacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#capacity WebPubsub#capacity}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#id WebPubsub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.identity"></a>

```csharp
public WebPubsubIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#identity WebPubsub#identity}

---

##### `LiveTrace`<sup>Optional</sup> <a name="LiveTrace" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.liveTrace"></a>

```csharp
public WebPubsubLiveTrace LiveTrace { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a>

live_trace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#live_trace WebPubsub#live_trace}

---

##### `LocalAuthEnabled`<sup>Optional</sup> <a name="LocalAuthEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.localAuthEnabled"></a>

```csharp
public bool|IResolvable LocalAuthEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#local_auth_enabled WebPubsub#local_auth_enabled}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.publicNetworkAccessEnabled"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#public_network_access_enabled WebPubsub#public_network_access_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#tags WebPubsub#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.timeouts"></a>

```csharp
public WebPubsubTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts">WebPubsubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#timeouts WebPubsub#timeouts}

---

##### `TlsClientCertEnabled`<sup>Optional</sup> <a name="TlsClientCertEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubConfig.property.tlsClientCertEnabled"></a>

```csharp
public bool|IResolvable TlsClientCertEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#tls_client_cert_enabled WebPubsub#tls_client_cert_enabled}.

---

### WebPubsubIdentity <a name="WebPubsubIdentity" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new WebPubsubIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#type WebPubsub#type}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#identity_ids WebPubsub#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#type WebPubsub#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#identity_ids WebPubsub#identity_ids}.

---

### WebPubsubLiveTrace <a name="WebPubsubLiveTrace" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new WebPubsubLiveTrace {
    bool|IResolvable ConnectivityLogsEnabled = null,
    bool|IResolvable Enabled = null,
    bool|IResolvable HttpRequestLogsEnabled = null,
    bool|IResolvable MessagingLogsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.connectivityLogsEnabled">ConnectivityLogsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#connectivity_logs_enabled WebPubsub#connectivity_logs_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#enabled WebPubsub#enabled}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.httpRequestLogsEnabled">HttpRequestLogsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#http_request_logs_enabled WebPubsub#http_request_logs_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.messagingLogsEnabled">MessagingLogsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#messaging_logs_enabled WebPubsub#messaging_logs_enabled}. |

---

##### `ConnectivityLogsEnabled`<sup>Optional</sup> <a name="ConnectivityLogsEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.connectivityLogsEnabled"></a>

```csharp
public bool|IResolvable ConnectivityLogsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#connectivity_logs_enabled WebPubsub#connectivity_logs_enabled}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#enabled WebPubsub#enabled}.

---

##### `HttpRequestLogsEnabled`<sup>Optional</sup> <a name="HttpRequestLogsEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.httpRequestLogsEnabled"></a>

```csharp
public bool|IResolvable HttpRequestLogsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#http_request_logs_enabled WebPubsub#http_request_logs_enabled}.

---

##### `MessagingLogsEnabled`<sup>Optional</sup> <a name="MessagingLogsEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace.property.messagingLogsEnabled"></a>

```csharp
public bool|IResolvable MessagingLogsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#messaging_logs_enabled WebPubsub#messaging_logs_enabled}.

---

### WebPubsubTimeouts <a name="WebPubsubTimeouts" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new WebPubsubTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#create WebPubsub#create}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#delete WebPubsub#delete}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#read WebPubsub#read}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#update WebPubsub#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#create WebPubsub#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#delete WebPubsub#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#read WebPubsub#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/web_pubsub#update WebPubsub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WebPubsubIdentityOutputReference <a name="WebPubsubIdentityOutputReference" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new WebPubsubIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.webPubsub.WebPubsubIdentityOutputReference.property.internalValue"></a>

```csharp
public WebPubsubIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubIdentity">WebPubsubIdentity</a>

---


### WebPubsubLiveTraceOutputReference <a name="WebPubsubLiveTraceOutputReference" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new WebPubsubLiveTraceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetConnectivityLogsEnabled">ResetConnectivityLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetHttpRequestLogsEnabled">ResetHttpRequestLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetMessagingLogsEnabled">ResetMessagingLogsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectivityLogsEnabled` <a name="ResetConnectivityLogsEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetConnectivityLogsEnabled"></a>

```csharp
private void ResetConnectivityLogsEnabled()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetHttpRequestLogsEnabled` <a name="ResetHttpRequestLogsEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetHttpRequestLogsEnabled"></a>

```csharp
private void ResetHttpRequestLogsEnabled()
```

##### `ResetMessagingLogsEnabled` <a name="ResetMessagingLogsEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.resetMessagingLogsEnabled"></a>

```csharp
private void ResetMessagingLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.connectivityLogsEnabledInput">ConnectivityLogsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.httpRequestLogsEnabledInput">HttpRequestLogsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.messagingLogsEnabledInput">MessagingLogsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.connectivityLogsEnabled">ConnectivityLogsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.httpRequestLogsEnabled">HttpRequestLogsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.messagingLogsEnabled">MessagingLogsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectivityLogsEnabledInput`<sup>Optional</sup> <a name="ConnectivityLogsEnabledInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.connectivityLogsEnabledInput"></a>

```csharp
public bool|IResolvable ConnectivityLogsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HttpRequestLogsEnabledInput`<sup>Optional</sup> <a name="HttpRequestLogsEnabledInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.httpRequestLogsEnabledInput"></a>

```csharp
public bool|IResolvable HttpRequestLogsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MessagingLogsEnabledInput`<sup>Optional</sup> <a name="MessagingLogsEnabledInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.messagingLogsEnabledInput"></a>

```csharp
public bool|IResolvable MessagingLogsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ConnectivityLogsEnabled`<sup>Required</sup> <a name="ConnectivityLogsEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.connectivityLogsEnabled"></a>

```csharp
public bool|IResolvable ConnectivityLogsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HttpRequestLogsEnabled`<sup>Required</sup> <a name="HttpRequestLogsEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.httpRequestLogsEnabled"></a>

```csharp
public bool|IResolvable HttpRequestLogsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MessagingLogsEnabled`<sup>Required</sup> <a name="MessagingLogsEnabled" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.messagingLogsEnabled"></a>

```csharp
public bool|IResolvable MessagingLogsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTraceOutputReference.property.internalValue"></a>

```csharp
public WebPubsubLiveTrace InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubLiveTrace">WebPubsubLiveTrace</a>

---


### WebPubsubTimeoutsOutputReference <a name="WebPubsubTimeoutsOutputReference" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new WebPubsubTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts">WebPubsubTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.webPubsub.WebPubsubTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WebPubsubTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.webPubsub.WebPubsubTimeouts">WebPubsubTimeouts</a>

---



