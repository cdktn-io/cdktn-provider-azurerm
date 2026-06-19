# `newRelicMonitor` Submodule <a name="`newRelicMonitor` Submodule" id="@cdktn/provider-azurerm.newRelicMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NewRelicMonitor <a name="NewRelicMonitor" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor azurerm_new_relic_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NewRelicMonitor(Construct Scope, string Id, NewRelicMonitorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig">NewRelicMonitorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig">NewRelicMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.putPlan">PutPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.putUser">PutUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetAccountCreationSource">ResetAccountCreationSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetIngestionKey">ResetIngestionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetOrganizationId">ResetOrganizationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetOrgCreationSource">ResetOrgCreationSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.putIdentity"></a>

```csharp
private void PutIdentity(NewRelicMonitorIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentity">NewRelicMonitorIdentity</a>

---

##### `PutPlan` <a name="PutPlan" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.putPlan"></a>

```csharp
private void PutPlan(NewRelicMonitorPlan Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.putPlan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan">NewRelicMonitorPlan</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.putTimeouts"></a>

```csharp
private void PutTimeouts(NewRelicMonitorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts">NewRelicMonitorTimeouts</a>

---

##### `PutUser` <a name="PutUser" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.putUser"></a>

```csharp
private void PutUser(NewRelicMonitorUser Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.putUser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUser">NewRelicMonitorUser</a>

---

##### `ResetAccountCreationSource` <a name="ResetAccountCreationSource" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetAccountCreationSource"></a>

```csharp
private void ResetAccountCreationSource()
```

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetIngestionKey` <a name="ResetIngestionKey" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetIngestionKey"></a>

```csharp
private void ResetIngestionKey()
```

##### `ResetOrganizationId` <a name="ResetOrganizationId" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetOrganizationId"></a>

```csharp
private void ResetOrganizationId()
```

##### `ResetOrgCreationSource` <a name="ResetOrgCreationSource" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetOrgCreationSource"></a>

```csharp
private void ResetOrgCreationSource()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.resetUserId"></a>

```csharp
private void ResetUserId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NewRelicMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

NewRelicMonitor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

NewRelicMonitor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

NewRelicMonitor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

NewRelicMonitor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NewRelicMonitor resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NewRelicMonitor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NewRelicMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NewRelicMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference">NewRelicMonitorIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.plan">Plan</a></code> | <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference">NewRelicMonitorPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference">NewRelicMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.user">User</a></code> | <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference">NewRelicMonitorUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.accountCreationSourceInput">AccountCreationSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentity">NewRelicMonitorIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.ingestionKeyInput">IngestionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.organizationIdInput">OrganizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.orgCreationSourceInput">OrgCreationSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.planInput">PlanInput</a></code> | <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan">NewRelicMonitorPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts">NewRelicMonitorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.userInput">UserInput</a></code> | <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUser">NewRelicMonitorUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.accountCreationSource">AccountCreationSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.ingestionKey">IngestionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.orgCreationSource">OrgCreationSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.userId">UserId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.identity"></a>

```csharp
public NewRelicMonitorIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference">NewRelicMonitorIdentityOutputReference</a>

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.plan"></a>

```csharp
public NewRelicMonitorPlanOutputReference Plan { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference">NewRelicMonitorPlanOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.timeouts"></a>

```csharp
public NewRelicMonitorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference">NewRelicMonitorTimeoutsOutputReference</a>

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.user"></a>

```csharp
public NewRelicMonitorUserOutputReference User { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference">NewRelicMonitorUserOutputReference</a>

---

##### `AccountCreationSourceInput`<sup>Optional</sup> <a name="AccountCreationSourceInput" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.accountCreationSourceInput"></a>

```csharp
public string AccountCreationSourceInput { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.identityInput"></a>

```csharp
public NewRelicMonitorIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentity">NewRelicMonitorIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IngestionKeyInput`<sup>Optional</sup> <a name="IngestionKeyInput" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.ingestionKeyInput"></a>

```csharp
public string IngestionKeyInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrganizationIdInput`<sup>Optional</sup> <a name="OrganizationIdInput" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.organizationIdInput"></a>

```csharp
public string OrganizationIdInput { get; }
```

- *Type:* string

---

##### `OrgCreationSourceInput`<sup>Optional</sup> <a name="OrgCreationSourceInput" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.orgCreationSourceInput"></a>

```csharp
public string OrgCreationSourceInput { get; }
```

- *Type:* string

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.planInput"></a>

```csharp
public NewRelicMonitorPlan PlanInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan">NewRelicMonitorPlan</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.timeoutsInput"></a>

```csharp
public IResolvable|NewRelicMonitorTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts">NewRelicMonitorTimeouts</a>

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.userInput"></a>

```csharp
public NewRelicMonitorUser UserInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUser">NewRelicMonitorUser</a>

---

##### `AccountCreationSource`<sup>Required</sup> <a name="AccountCreationSource" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.accountCreationSource"></a>

```csharp
public string AccountCreationSource { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IngestionKey`<sup>Required</sup> <a name="IngestionKey" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.ingestionKey"></a>

```csharp
public string IngestionKey { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `OrgCreationSource`<sup>Required</sup> <a name="OrgCreationSource" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.orgCreationSource"></a>

```csharp
public string OrgCreationSource { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NewRelicMonitorConfig <a name="NewRelicMonitorConfig" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NewRelicMonitorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Name,
    NewRelicMonitorPlan Plan,
    string ResourceGroupName,
    NewRelicMonitorUser User,
    string AccountCreationSource = null,
    string AccountId = null,
    string Id = null,
    NewRelicMonitorIdentity Identity = null,
    string IngestionKey = null,
    string OrganizationId = null,
    string OrgCreationSource = null,
    NewRelicMonitorTimeouts Timeouts = null,
    string UserId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#location NewRelicMonitor#location}. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#name NewRelicMonitor#name}. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.plan">Plan</a></code> | <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan">NewRelicMonitorPlan</a></code> | plan block. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#resource_group_name NewRelicMonitor#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.user">User</a></code> | <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUser">NewRelicMonitorUser</a></code> | user block. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.accountCreationSource">AccountCreationSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#account_creation_source NewRelicMonitor#account_creation_source}. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#account_id NewRelicMonitor#account_id}. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#id NewRelicMonitor#id}. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentity">NewRelicMonitorIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.ingestionKey">IngestionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#ingestion_key NewRelicMonitor#ingestion_key}. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.organizationId">OrganizationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#organization_id NewRelicMonitor#organization_id}. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.orgCreationSource">OrgCreationSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#org_creation_source NewRelicMonitor#org_creation_source}. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts">NewRelicMonitorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.userId">UserId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#user_id NewRelicMonitor#user_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#location NewRelicMonitor#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#name NewRelicMonitor#name}.

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.plan"></a>

```csharp
public NewRelicMonitorPlan Plan { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan">NewRelicMonitorPlan</a>

plan block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#plan NewRelicMonitor#plan}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#resource_group_name NewRelicMonitor#resource_group_name}.

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.user"></a>

```csharp
public NewRelicMonitorUser User { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUser">NewRelicMonitorUser</a>

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#user NewRelicMonitor#user}

---

##### `AccountCreationSource`<sup>Optional</sup> <a name="AccountCreationSource" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.accountCreationSource"></a>

```csharp
public string AccountCreationSource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#account_creation_source NewRelicMonitor#account_creation_source}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#account_id NewRelicMonitor#account_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#id NewRelicMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.identity"></a>

```csharp
public NewRelicMonitorIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentity">NewRelicMonitorIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#identity NewRelicMonitor#identity}

---

##### `IngestionKey`<sup>Optional</sup> <a name="IngestionKey" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.ingestionKey"></a>

```csharp
public string IngestionKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#ingestion_key NewRelicMonitor#ingestion_key}.

---

##### `OrganizationId`<sup>Optional</sup> <a name="OrganizationId" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.organizationId"></a>

```csharp
public string OrganizationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#organization_id NewRelicMonitor#organization_id}.

---

##### `OrgCreationSource`<sup>Optional</sup> <a name="OrgCreationSource" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.orgCreationSource"></a>

```csharp
public string OrgCreationSource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#org_creation_source NewRelicMonitor#org_creation_source}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.timeouts"></a>

```csharp
public NewRelicMonitorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts">NewRelicMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#timeouts NewRelicMonitor#timeouts}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorConfig.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#user_id NewRelicMonitor#user_id}.

---

### NewRelicMonitorIdentity <a name="NewRelicMonitorIdentity" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NewRelicMonitorIdentity {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#type NewRelicMonitor#type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#type NewRelicMonitor#type}.

---

### NewRelicMonitorPlan <a name="NewRelicMonitorPlan" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NewRelicMonitorPlan {
    string EffectiveDate,
    string BillingCycle = null,
    string PlanId = null,
    string UsageType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.property.effectiveDate">EffectiveDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#effective_date NewRelicMonitor#effective_date}. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.property.billingCycle">BillingCycle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#billing_cycle NewRelicMonitor#billing_cycle}. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.property.planId">PlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#plan_id NewRelicMonitor#plan_id}. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.property.usageType">UsageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#usage_type NewRelicMonitor#usage_type}. |

---

##### `EffectiveDate`<sup>Required</sup> <a name="EffectiveDate" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.property.effectiveDate"></a>

```csharp
public string EffectiveDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#effective_date NewRelicMonitor#effective_date}.

---

##### `BillingCycle`<sup>Optional</sup> <a name="BillingCycle" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.property.billingCycle"></a>

```csharp
public string BillingCycle { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#billing_cycle NewRelicMonitor#billing_cycle}.

---

##### `PlanId`<sup>Optional</sup> <a name="PlanId" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.property.planId"></a>

```csharp
public string PlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#plan_id NewRelicMonitor#plan_id}.

---

##### `UsageType`<sup>Optional</sup> <a name="UsageType" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan.property.usageType"></a>

```csharp
public string UsageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#usage_type NewRelicMonitor#usage_type}.

---

### NewRelicMonitorTimeouts <a name="NewRelicMonitorTimeouts" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NewRelicMonitorTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#create NewRelicMonitor#create}. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#delete NewRelicMonitor#delete}. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#read NewRelicMonitor#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#create NewRelicMonitor#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#delete NewRelicMonitor#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#read NewRelicMonitor#read}.

---

### NewRelicMonitorUser <a name="NewRelicMonitorUser" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NewRelicMonitorUser {
    string Email,
    string FirstName,
    string LastName,
    string PhoneNumber
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.property.email">Email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#email NewRelicMonitor#email}. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.property.firstName">FirstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#first_name NewRelicMonitor#first_name}. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.property.lastName">LastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#last_name NewRelicMonitor#last_name}. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#phone_number NewRelicMonitor#phone_number}. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#email NewRelicMonitor#email}.

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.property.firstName"></a>

```csharp
public string FirstName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#first_name NewRelicMonitor#first_name}.

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.property.lastName"></a>

```csharp
public string LastName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#last_name NewRelicMonitor#last_name}.

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUser.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/new_relic_monitor#phone_number NewRelicMonitor#phone_number}.

---

## Classes <a name="Classes" id="Classes"></a>

### NewRelicMonitorIdentityOutputReference <a name="NewRelicMonitorIdentityOutputReference" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NewRelicMonitorIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentity">NewRelicMonitorIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentityOutputReference.property.internalValue"></a>

```csharp
public NewRelicMonitorIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorIdentity">NewRelicMonitorIdentity</a>

---


### NewRelicMonitorPlanOutputReference <a name="NewRelicMonitorPlanOutputReference" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NewRelicMonitorPlanOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resetBillingCycle">ResetBillingCycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resetPlanId">ResetPlanId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resetUsageType">ResetUsageType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBillingCycle` <a name="ResetBillingCycle" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resetBillingCycle"></a>

```csharp
private void ResetBillingCycle()
```

##### `ResetPlanId` <a name="ResetPlanId" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resetPlanId"></a>

```csharp
private void ResetPlanId()
```

##### `ResetUsageType` <a name="ResetUsageType" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.resetUsageType"></a>

```csharp
private void ResetUsageType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.billingCycleInput">BillingCycleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.effectiveDateInput">EffectiveDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.planIdInput">PlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.usageTypeInput">UsageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.billingCycle">BillingCycle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.effectiveDate">EffectiveDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.planId">PlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.usageType">UsageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan">NewRelicMonitorPlan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BillingCycleInput`<sup>Optional</sup> <a name="BillingCycleInput" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.billingCycleInput"></a>

```csharp
public string BillingCycleInput { get; }
```

- *Type:* string

---

##### `EffectiveDateInput`<sup>Optional</sup> <a name="EffectiveDateInput" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.effectiveDateInput"></a>

```csharp
public string EffectiveDateInput { get; }
```

- *Type:* string

---

##### `PlanIdInput`<sup>Optional</sup> <a name="PlanIdInput" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.planIdInput"></a>

```csharp
public string PlanIdInput { get; }
```

- *Type:* string

---

##### `UsageTypeInput`<sup>Optional</sup> <a name="UsageTypeInput" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.usageTypeInput"></a>

```csharp
public string UsageTypeInput { get; }
```

- *Type:* string

---

##### `BillingCycle`<sup>Required</sup> <a name="BillingCycle" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.billingCycle"></a>

```csharp
public string BillingCycle { get; }
```

- *Type:* string

---

##### `EffectiveDate`<sup>Required</sup> <a name="EffectiveDate" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.effectiveDate"></a>

```csharp
public string EffectiveDate { get; }
```

- *Type:* string

---

##### `PlanId`<sup>Required</sup> <a name="PlanId" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.planId"></a>

```csharp
public string PlanId { get; }
```

- *Type:* string

---

##### `UsageType`<sup>Required</sup> <a name="UsageType" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.usageType"></a>

```csharp
public string UsageType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlanOutputReference.property.internalValue"></a>

```csharp
public NewRelicMonitorPlan InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorPlan">NewRelicMonitorPlan</a>

---


### NewRelicMonitorTimeoutsOutputReference <a name="NewRelicMonitorTimeoutsOutputReference" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NewRelicMonitorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts">NewRelicMonitorTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NewRelicMonitorTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorTimeouts">NewRelicMonitorTimeouts</a>

---


### NewRelicMonitorUserOutputReference <a name="NewRelicMonitorUserOutputReference" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NewRelicMonitorUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUser">NewRelicMonitorUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.firstNameInput"></a>

```csharp
public string FirstNameInput { get; }
```

- *Type:* string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.lastNameInput"></a>

```csharp
public string LastNameInput { get; }
```

- *Type:* string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.phoneNumberInput"></a>

```csharp
public string PhoneNumberInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUserOutputReference.property.internalValue"></a>

```csharp
public NewRelicMonitorUser InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.newRelicMonitor.NewRelicMonitorUser">NewRelicMonitorUser</a>

---



