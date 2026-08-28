# `kustoAttachedDatabaseConfiguration` Submodule <a name="`kustoAttachedDatabaseConfiguration` Submodule" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KustoAttachedDatabaseConfiguration <a name="KustoAttachedDatabaseConfiguration" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration azurerm_kusto_attached_database_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new KustoAttachedDatabaseConfiguration(Construct Scope, string Id, KustoAttachedDatabaseConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig">KustoAttachedDatabaseConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig">KustoAttachedDatabaseConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.putSharing">PutSharing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetDatabaseNameOverride">ResetDatabaseNameOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetDatabaseNamePrefix">ResetDatabaseNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetDefaultPrincipalModificationKind">ResetDefaultPrincipalModificationKind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetSharing">ResetSharing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSharing` <a name="PutSharing" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.putSharing"></a>

```csharp
private void PutSharing(KustoAttachedDatabaseConfigurationSharing Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.putSharing.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing">KustoAttachedDatabaseConfigurationSharing</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.putTimeouts"></a>

```csharp
private void PutTimeouts(KustoAttachedDatabaseConfigurationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts">KustoAttachedDatabaseConfigurationTimeouts</a>

---

##### `ResetDatabaseNameOverride` <a name="ResetDatabaseNameOverride" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetDatabaseNameOverride"></a>

```csharp
private void ResetDatabaseNameOverride()
```

##### `ResetDatabaseNamePrefix` <a name="ResetDatabaseNamePrefix" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetDatabaseNamePrefix"></a>

```csharp
private void ResetDatabaseNamePrefix()
```

##### `ResetDefaultPrincipalModificationKind` <a name="ResetDefaultPrincipalModificationKind" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetDefaultPrincipalModificationKind"></a>

```csharp
private void ResetDefaultPrincipalModificationKind()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSharing` <a name="ResetSharing" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetSharing"></a>

```csharp
private void ResetSharing()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KustoAttachedDatabaseConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

KustoAttachedDatabaseConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

KustoAttachedDatabaseConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

KustoAttachedDatabaseConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

KustoAttachedDatabaseConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a KustoAttachedDatabaseConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KustoAttachedDatabaseConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KustoAttachedDatabaseConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the KustoAttachedDatabaseConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.attachedDatabaseNames">AttachedDatabaseNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.sharing">Sharing</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference">KustoAttachedDatabaseConfigurationSharingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference">KustoAttachedDatabaseConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseNameOverrideInput">DatabaseNameOverrideInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseNamePrefixInput">DatabaseNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.defaultPrincipalModificationKindInput">DefaultPrincipalModificationKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.sharingInput">SharingInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing">KustoAttachedDatabaseConfigurationSharing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts">KustoAttachedDatabaseConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseNameOverride">DatabaseNameOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseNamePrefix">DatabaseNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.defaultPrincipalModificationKind">DefaultPrincipalModificationKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AttachedDatabaseNames`<sup>Required</sup> <a name="AttachedDatabaseNames" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.attachedDatabaseNames"></a>

```csharp
public string[] AttachedDatabaseNames { get; }
```

- *Type:* string[]

---

##### `Sharing`<sup>Required</sup> <a name="Sharing" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.sharing"></a>

```csharp
public KustoAttachedDatabaseConfigurationSharingOutputReference Sharing { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference">KustoAttachedDatabaseConfigurationSharingOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.timeouts"></a>

```csharp
public KustoAttachedDatabaseConfigurationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference">KustoAttachedDatabaseConfigurationTimeoutsOutputReference</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `DatabaseNameOverrideInput`<sup>Optional</sup> <a name="DatabaseNameOverrideInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseNameOverrideInput"></a>

```csharp
public string DatabaseNameOverrideInput { get; }
```

- *Type:* string

---

##### `DatabaseNamePrefixInput`<sup>Optional</sup> <a name="DatabaseNamePrefixInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseNamePrefixInput"></a>

```csharp
public string DatabaseNamePrefixInput { get; }
```

- *Type:* string

---

##### `DefaultPrincipalModificationKindInput`<sup>Optional</sup> <a name="DefaultPrincipalModificationKindInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.defaultPrincipalModificationKindInput"></a>

```csharp
public string DefaultPrincipalModificationKindInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SharingInput`<sup>Optional</sup> <a name="SharingInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.sharingInput"></a>

```csharp
public KustoAttachedDatabaseConfigurationSharing SharingInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing">KustoAttachedDatabaseConfigurationSharing</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.timeoutsInput"></a>

```csharp
public IResolvable|KustoAttachedDatabaseConfigurationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts">KustoAttachedDatabaseConfigurationTimeouts</a>

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `DatabaseNameOverride`<sup>Required</sup> <a name="DatabaseNameOverride" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseNameOverride"></a>

```csharp
public string DatabaseNameOverride { get; }
```

- *Type:* string

---

##### `DatabaseNamePrefix`<sup>Required</sup> <a name="DatabaseNamePrefix" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.databaseNamePrefix"></a>

```csharp
public string DatabaseNamePrefix { get; }
```

- *Type:* string

---

##### `DefaultPrincipalModificationKind`<sup>Required</sup> <a name="DefaultPrincipalModificationKind" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.defaultPrincipalModificationKind"></a>

```csharp
public string DefaultPrincipalModificationKind { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KustoAttachedDatabaseConfigurationConfig <a name="KustoAttachedDatabaseConfigurationConfig" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new KustoAttachedDatabaseConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ClusterId,
    string ClusterName,
    string DatabaseName,
    string Location,
    string Name,
    string ResourceGroupName,
    string DatabaseNameOverride = null,
    string DatabaseNamePrefix = null,
    string DefaultPrincipalModificationKind = null,
    string Id = null,
    KustoAttachedDatabaseConfigurationSharing Sharing = null,
    KustoAttachedDatabaseConfigurationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#cluster_id KustoAttachedDatabaseConfiguration#cluster_id}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#cluster_name KustoAttachedDatabaseConfiguration#cluster_name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#database_name KustoAttachedDatabaseConfiguration#database_name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#location KustoAttachedDatabaseConfiguration#location}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#name KustoAttachedDatabaseConfiguration#name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#resource_group_name KustoAttachedDatabaseConfiguration#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.databaseNameOverride">DatabaseNameOverride</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#database_name_override KustoAttachedDatabaseConfiguration#database_name_override}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.databaseNamePrefix">DatabaseNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#database_name_prefix KustoAttachedDatabaseConfiguration#database_name_prefix}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.defaultPrincipalModificationKind">DefaultPrincipalModificationKind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#default_principal_modification_kind KustoAttachedDatabaseConfiguration#default_principal_modification_kind}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#id KustoAttachedDatabaseConfiguration#id}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.sharing">Sharing</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing">KustoAttachedDatabaseConfigurationSharing</a></code> | sharing block. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts">KustoAttachedDatabaseConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#cluster_id KustoAttachedDatabaseConfiguration#cluster_id}.

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#cluster_name KustoAttachedDatabaseConfiguration#cluster_name}.

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#database_name KustoAttachedDatabaseConfiguration#database_name}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#location KustoAttachedDatabaseConfiguration#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#name KustoAttachedDatabaseConfiguration#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#resource_group_name KustoAttachedDatabaseConfiguration#resource_group_name}.

---

##### `DatabaseNameOverride`<sup>Optional</sup> <a name="DatabaseNameOverride" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.databaseNameOverride"></a>

```csharp
public string DatabaseNameOverride { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#database_name_override KustoAttachedDatabaseConfiguration#database_name_override}.

---

##### `DatabaseNamePrefix`<sup>Optional</sup> <a name="DatabaseNamePrefix" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.databaseNamePrefix"></a>

```csharp
public string DatabaseNamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#database_name_prefix KustoAttachedDatabaseConfiguration#database_name_prefix}.

---

##### `DefaultPrincipalModificationKind`<sup>Optional</sup> <a name="DefaultPrincipalModificationKind" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.defaultPrincipalModificationKind"></a>

```csharp
public string DefaultPrincipalModificationKind { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#default_principal_modification_kind KustoAttachedDatabaseConfiguration#default_principal_modification_kind}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#id KustoAttachedDatabaseConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Sharing`<sup>Optional</sup> <a name="Sharing" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.sharing"></a>

```csharp
public KustoAttachedDatabaseConfigurationSharing Sharing { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing">KustoAttachedDatabaseConfigurationSharing</a>

sharing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#sharing KustoAttachedDatabaseConfiguration#sharing}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationConfig.property.timeouts"></a>

```csharp
public KustoAttachedDatabaseConfigurationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts">KustoAttachedDatabaseConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#timeouts KustoAttachedDatabaseConfiguration#timeouts}

---

### KustoAttachedDatabaseConfigurationSharing <a name="KustoAttachedDatabaseConfigurationSharing" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new KustoAttachedDatabaseConfigurationSharing {
    string[] ExternalTablesToExclude = null,
    string[] ExternalTablesToInclude = null,
    string[] FunctionsToExclude = null,
    string[] FunctionsToInclude = null,
    string[] MaterializedViewsToExclude = null,
    string[] MaterializedViewsToInclude = null,
    string[] TablesToExclude = null,
    string[] TablesToInclude = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.externalTablesToExclude">ExternalTablesToExclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#external_tables_to_exclude KustoAttachedDatabaseConfiguration#external_tables_to_exclude}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.externalTablesToInclude">ExternalTablesToInclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#external_tables_to_include KustoAttachedDatabaseConfiguration#external_tables_to_include}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.functionsToExclude">FunctionsToExclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#functions_to_exclude KustoAttachedDatabaseConfiguration#functions_to_exclude}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.functionsToInclude">FunctionsToInclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#functions_to_include KustoAttachedDatabaseConfiguration#functions_to_include}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.materializedViewsToExclude">MaterializedViewsToExclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#materialized_views_to_exclude KustoAttachedDatabaseConfiguration#materialized_views_to_exclude}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.materializedViewsToInclude">MaterializedViewsToInclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#materialized_views_to_include KustoAttachedDatabaseConfiguration#materialized_views_to_include}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.tablesToExclude">TablesToExclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#tables_to_exclude KustoAttachedDatabaseConfiguration#tables_to_exclude}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.tablesToInclude">TablesToInclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#tables_to_include KustoAttachedDatabaseConfiguration#tables_to_include}. |

---

##### `ExternalTablesToExclude`<sup>Optional</sup> <a name="ExternalTablesToExclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.externalTablesToExclude"></a>

```csharp
public string[] ExternalTablesToExclude { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#external_tables_to_exclude KustoAttachedDatabaseConfiguration#external_tables_to_exclude}.

---

##### `ExternalTablesToInclude`<sup>Optional</sup> <a name="ExternalTablesToInclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.externalTablesToInclude"></a>

```csharp
public string[] ExternalTablesToInclude { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#external_tables_to_include KustoAttachedDatabaseConfiguration#external_tables_to_include}.

---

##### `FunctionsToExclude`<sup>Optional</sup> <a name="FunctionsToExclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.functionsToExclude"></a>

```csharp
public string[] FunctionsToExclude { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#functions_to_exclude KustoAttachedDatabaseConfiguration#functions_to_exclude}.

---

##### `FunctionsToInclude`<sup>Optional</sup> <a name="FunctionsToInclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.functionsToInclude"></a>

```csharp
public string[] FunctionsToInclude { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#functions_to_include KustoAttachedDatabaseConfiguration#functions_to_include}.

---

##### `MaterializedViewsToExclude`<sup>Optional</sup> <a name="MaterializedViewsToExclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.materializedViewsToExclude"></a>

```csharp
public string[] MaterializedViewsToExclude { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#materialized_views_to_exclude KustoAttachedDatabaseConfiguration#materialized_views_to_exclude}.

---

##### `MaterializedViewsToInclude`<sup>Optional</sup> <a name="MaterializedViewsToInclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.materializedViewsToInclude"></a>

```csharp
public string[] MaterializedViewsToInclude { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#materialized_views_to_include KustoAttachedDatabaseConfiguration#materialized_views_to_include}.

---

##### `TablesToExclude`<sup>Optional</sup> <a name="TablesToExclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.tablesToExclude"></a>

```csharp
public string[] TablesToExclude { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#tables_to_exclude KustoAttachedDatabaseConfiguration#tables_to_exclude}.

---

##### `TablesToInclude`<sup>Optional</sup> <a name="TablesToInclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing.property.tablesToInclude"></a>

```csharp
public string[] TablesToInclude { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#tables_to_include KustoAttachedDatabaseConfiguration#tables_to_include}.

---

### KustoAttachedDatabaseConfigurationTimeouts <a name="KustoAttachedDatabaseConfigurationTimeouts" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new KustoAttachedDatabaseConfigurationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#create KustoAttachedDatabaseConfiguration#create}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#delete KustoAttachedDatabaseConfiguration#delete}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#read KustoAttachedDatabaseConfiguration#read}. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#update KustoAttachedDatabaseConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#create KustoAttachedDatabaseConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#delete KustoAttachedDatabaseConfiguration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#read KustoAttachedDatabaseConfiguration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_attached_database_configuration#update KustoAttachedDatabaseConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KustoAttachedDatabaseConfigurationSharingOutputReference <a name="KustoAttachedDatabaseConfigurationSharingOutputReference" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new KustoAttachedDatabaseConfigurationSharingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetExternalTablesToExclude">ResetExternalTablesToExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetExternalTablesToInclude">ResetExternalTablesToInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetFunctionsToExclude">ResetFunctionsToExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetFunctionsToInclude">ResetFunctionsToInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetMaterializedViewsToExclude">ResetMaterializedViewsToExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetMaterializedViewsToInclude">ResetMaterializedViewsToInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetTablesToExclude">ResetTablesToExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetTablesToInclude">ResetTablesToInclude</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExternalTablesToExclude` <a name="ResetExternalTablesToExclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetExternalTablesToExclude"></a>

```csharp
private void ResetExternalTablesToExclude()
```

##### `ResetExternalTablesToInclude` <a name="ResetExternalTablesToInclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetExternalTablesToInclude"></a>

```csharp
private void ResetExternalTablesToInclude()
```

##### `ResetFunctionsToExclude` <a name="ResetFunctionsToExclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetFunctionsToExclude"></a>

```csharp
private void ResetFunctionsToExclude()
```

##### `ResetFunctionsToInclude` <a name="ResetFunctionsToInclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetFunctionsToInclude"></a>

```csharp
private void ResetFunctionsToInclude()
```

##### `ResetMaterializedViewsToExclude` <a name="ResetMaterializedViewsToExclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetMaterializedViewsToExclude"></a>

```csharp
private void ResetMaterializedViewsToExclude()
```

##### `ResetMaterializedViewsToInclude` <a name="ResetMaterializedViewsToInclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetMaterializedViewsToInclude"></a>

```csharp
private void ResetMaterializedViewsToInclude()
```

##### `ResetTablesToExclude` <a name="ResetTablesToExclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetTablesToExclude"></a>

```csharp
private void ResetTablesToExclude()
```

##### `ResetTablesToInclude` <a name="ResetTablesToInclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.resetTablesToInclude"></a>

```csharp
private void ResetTablesToInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.externalTablesToExcludeInput">ExternalTablesToExcludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.externalTablesToIncludeInput">ExternalTablesToIncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.functionsToExcludeInput">FunctionsToExcludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.functionsToIncludeInput">FunctionsToIncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.materializedViewsToExcludeInput">MaterializedViewsToExcludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.materializedViewsToIncludeInput">MaterializedViewsToIncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.tablesToExcludeInput">TablesToExcludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.tablesToIncludeInput">TablesToIncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.externalTablesToExclude">ExternalTablesToExclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.externalTablesToInclude">ExternalTablesToInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.functionsToExclude">FunctionsToExclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.functionsToInclude">FunctionsToInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.materializedViewsToExclude">MaterializedViewsToExclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.materializedViewsToInclude">MaterializedViewsToInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.tablesToExclude">TablesToExclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.tablesToInclude">TablesToInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing">KustoAttachedDatabaseConfigurationSharing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalTablesToExcludeInput`<sup>Optional</sup> <a name="ExternalTablesToExcludeInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.externalTablesToExcludeInput"></a>

```csharp
public string[] ExternalTablesToExcludeInput { get; }
```

- *Type:* string[]

---

##### `ExternalTablesToIncludeInput`<sup>Optional</sup> <a name="ExternalTablesToIncludeInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.externalTablesToIncludeInput"></a>

```csharp
public string[] ExternalTablesToIncludeInput { get; }
```

- *Type:* string[]

---

##### `FunctionsToExcludeInput`<sup>Optional</sup> <a name="FunctionsToExcludeInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.functionsToExcludeInput"></a>

```csharp
public string[] FunctionsToExcludeInput { get; }
```

- *Type:* string[]

---

##### `FunctionsToIncludeInput`<sup>Optional</sup> <a name="FunctionsToIncludeInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.functionsToIncludeInput"></a>

```csharp
public string[] FunctionsToIncludeInput { get; }
```

- *Type:* string[]

---

##### `MaterializedViewsToExcludeInput`<sup>Optional</sup> <a name="MaterializedViewsToExcludeInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.materializedViewsToExcludeInput"></a>

```csharp
public string[] MaterializedViewsToExcludeInput { get; }
```

- *Type:* string[]

---

##### `MaterializedViewsToIncludeInput`<sup>Optional</sup> <a name="MaterializedViewsToIncludeInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.materializedViewsToIncludeInput"></a>

```csharp
public string[] MaterializedViewsToIncludeInput { get; }
```

- *Type:* string[]

---

##### `TablesToExcludeInput`<sup>Optional</sup> <a name="TablesToExcludeInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.tablesToExcludeInput"></a>

```csharp
public string[] TablesToExcludeInput { get; }
```

- *Type:* string[]

---

##### `TablesToIncludeInput`<sup>Optional</sup> <a name="TablesToIncludeInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.tablesToIncludeInput"></a>

```csharp
public string[] TablesToIncludeInput { get; }
```

- *Type:* string[]

---

##### `ExternalTablesToExclude`<sup>Required</sup> <a name="ExternalTablesToExclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.externalTablesToExclude"></a>

```csharp
public string[] ExternalTablesToExclude { get; }
```

- *Type:* string[]

---

##### `ExternalTablesToInclude`<sup>Required</sup> <a name="ExternalTablesToInclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.externalTablesToInclude"></a>

```csharp
public string[] ExternalTablesToInclude { get; }
```

- *Type:* string[]

---

##### `FunctionsToExclude`<sup>Required</sup> <a name="FunctionsToExclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.functionsToExclude"></a>

```csharp
public string[] FunctionsToExclude { get; }
```

- *Type:* string[]

---

##### `FunctionsToInclude`<sup>Required</sup> <a name="FunctionsToInclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.functionsToInclude"></a>

```csharp
public string[] FunctionsToInclude { get; }
```

- *Type:* string[]

---

##### `MaterializedViewsToExclude`<sup>Required</sup> <a name="MaterializedViewsToExclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.materializedViewsToExclude"></a>

```csharp
public string[] MaterializedViewsToExclude { get; }
```

- *Type:* string[]

---

##### `MaterializedViewsToInclude`<sup>Required</sup> <a name="MaterializedViewsToInclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.materializedViewsToInclude"></a>

```csharp
public string[] MaterializedViewsToInclude { get; }
```

- *Type:* string[]

---

##### `TablesToExclude`<sup>Required</sup> <a name="TablesToExclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.tablesToExclude"></a>

```csharp
public string[] TablesToExclude { get; }
```

- *Type:* string[]

---

##### `TablesToInclude`<sup>Required</sup> <a name="TablesToInclude" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.tablesToInclude"></a>

```csharp
public string[] TablesToInclude { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharingOutputReference.property.internalValue"></a>

```csharp
public KustoAttachedDatabaseConfigurationSharing InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationSharing">KustoAttachedDatabaseConfigurationSharing</a>

---


### KustoAttachedDatabaseConfigurationTimeoutsOutputReference <a name="KustoAttachedDatabaseConfigurationTimeoutsOutputReference" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new KustoAttachedDatabaseConfigurationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts">KustoAttachedDatabaseConfigurationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KustoAttachedDatabaseConfigurationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.kustoAttachedDatabaseConfiguration.KustoAttachedDatabaseConfigurationTimeouts">KustoAttachedDatabaseConfigurationTimeouts</a>

---



