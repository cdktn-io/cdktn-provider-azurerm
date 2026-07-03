# `networkManagerIpamPool` Submodule <a name="`networkManagerIpamPool` Submodule" id="@cdktn/provider-azurerm.networkManagerIpamPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkManagerIpamPool <a name="NetworkManagerIpamPool" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool azurerm_network_manager_ipam_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NetworkManagerIpamPool(Construct Scope, string Id, NetworkManagerIpamPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig">NetworkManagerIpamPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig">NetworkManagerIpamPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetParentPoolName">ResetParentPoolName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkManagerIpamPoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts">NetworkManagerIpamPoolTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetParentPoolName` <a name="ResetParentPoolName" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetParentPoolName"></a>

```csharp
private void ResetParentPoolName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkManagerIpamPool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

NetworkManagerIpamPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

NetworkManagerIpamPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

NetworkManagerIpamPool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

NetworkManagerIpamPool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkManagerIpamPool resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkManagerIpamPool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkManagerIpamPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkManagerIpamPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference">NetworkManagerIpamPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.addressPrefixesInput">AddressPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.networkManagerIdInput">NetworkManagerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.parentPoolNameInput">ParentPoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts">NetworkManagerIpamPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.addressPrefixes">AddressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.networkManagerId">NetworkManagerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.parentPoolName">ParentPoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.timeouts"></a>

```csharp
public NetworkManagerIpamPoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference">NetworkManagerIpamPoolTimeoutsOutputReference</a>

---

##### `AddressPrefixesInput`<sup>Optional</sup> <a name="AddressPrefixesInput" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.addressPrefixesInput"></a>

```csharp
public string[] AddressPrefixesInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkManagerIdInput`<sup>Optional</sup> <a name="NetworkManagerIdInput" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.networkManagerIdInput"></a>

```csharp
public string NetworkManagerIdInput { get; }
```

- *Type:* string

---

##### `ParentPoolNameInput`<sup>Optional</sup> <a name="ParentPoolNameInput" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.parentPoolNameInput"></a>

```csharp
public string ParentPoolNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.timeoutsInput"></a>

```csharp
public IResolvable|NetworkManagerIpamPoolTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts">NetworkManagerIpamPoolTimeouts</a>

---

##### `AddressPrefixes`<sup>Required</sup> <a name="AddressPrefixes" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.addressPrefixes"></a>

```csharp
public string[] AddressPrefixes { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkManagerId`<sup>Required</sup> <a name="NetworkManagerId" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.networkManagerId"></a>

```csharp
public string NetworkManagerId { get; }
```

- *Type:* string

---

##### `ParentPoolName`<sup>Required</sup> <a name="ParentPoolName" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.parentPoolName"></a>

```csharp
public string ParentPoolName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkManagerIpamPoolConfig <a name="NetworkManagerIpamPoolConfig" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NetworkManagerIpamPoolConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] AddressPrefixes,
    string Location,
    string Name,
    string NetworkManagerId,
    string Description = null,
    string DisplayName = null,
    string Id = null,
    string ParentPoolName = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    NetworkManagerIpamPoolTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.addressPrefixes">AddressPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#address_prefixes NetworkManagerIpamPool#address_prefixes}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#location NetworkManagerIpamPool#location}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#name NetworkManagerIpamPool#name}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.networkManagerId">NetworkManagerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#network_manager_id NetworkManagerIpamPool#network_manager_id}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#description NetworkManagerIpamPool#description}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#display_name NetworkManagerIpamPool#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#id NetworkManagerIpamPool#id}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.parentPoolName">ParentPoolName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#parent_pool_name NetworkManagerIpamPool#parent_pool_name}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#tags NetworkManagerIpamPool#tags}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts">NetworkManagerIpamPoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AddressPrefixes`<sup>Required</sup> <a name="AddressPrefixes" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.addressPrefixes"></a>

```csharp
public string[] AddressPrefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#address_prefixes NetworkManagerIpamPool#address_prefixes}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#location NetworkManagerIpamPool#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#name NetworkManagerIpamPool#name}.

---

##### `NetworkManagerId`<sup>Required</sup> <a name="NetworkManagerId" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.networkManagerId"></a>

```csharp
public string NetworkManagerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#network_manager_id NetworkManagerIpamPool#network_manager_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#description NetworkManagerIpamPool#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#display_name NetworkManagerIpamPool#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#id NetworkManagerIpamPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ParentPoolName`<sup>Optional</sup> <a name="ParentPoolName" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.parentPoolName"></a>

```csharp
public string ParentPoolName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#parent_pool_name NetworkManagerIpamPool#parent_pool_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#tags NetworkManagerIpamPool#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolConfig.property.timeouts"></a>

```csharp
public NetworkManagerIpamPoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts">NetworkManagerIpamPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#timeouts NetworkManagerIpamPool#timeouts}

---

### NetworkManagerIpamPoolTimeouts <a name="NetworkManagerIpamPoolTimeouts" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NetworkManagerIpamPoolTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#create NetworkManagerIpamPool#create}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#delete NetworkManagerIpamPool#delete}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#read NetworkManagerIpamPool#read}. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#update NetworkManagerIpamPool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#create NetworkManagerIpamPool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#delete NetworkManagerIpamPool#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#read NetworkManagerIpamPool#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/network_manager_ipam_pool#update NetworkManagerIpamPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagerIpamPoolTimeoutsOutputReference <a name="NetworkManagerIpamPoolTimeoutsOutputReference" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NetworkManagerIpamPoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts">NetworkManagerIpamPoolTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkManagerIpamPoolTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.networkManagerIpamPool.NetworkManagerIpamPoolTimeouts">NetworkManagerIpamPoolTimeouts</a>

---



