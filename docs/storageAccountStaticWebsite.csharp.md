# `storageAccountStaticWebsite` Submodule <a name="`storageAccountStaticWebsite` Submodule" id="@cdktn/provider-azurerm.storageAccountStaticWebsite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccountStaticWebsite <a name="StorageAccountStaticWebsite" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_static_website azurerm_storage_account_static_website}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageAccountStaticWebsite(Construct Scope, string Id, StorageAccountStaticWebsiteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig">StorageAccountStaticWebsiteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig">StorageAccountStaticWebsiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.resetError404Document">ResetError404Document</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.resetIndexDocument">ResetIndexDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.putTimeouts"></a>

```csharp
private void PutTimeouts(StorageAccountStaticWebsiteTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts">StorageAccountStaticWebsiteTimeouts</a>

---

##### `ResetError404Document` <a name="ResetError404Document" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.resetError404Document"></a>

```csharp
private void ResetError404Document()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIndexDocument` <a name="ResetIndexDocument" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.resetIndexDocument"></a>

```csharp
private void ResetIndexDocument()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StorageAccountStaticWebsite resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

StorageAccountStaticWebsite.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

StorageAccountStaticWebsite.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

StorageAccountStaticWebsite.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

StorageAccountStaticWebsite.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a StorageAccountStaticWebsite resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageAccountStaticWebsite to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageAccountStaticWebsite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_static_website#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the StorageAccountStaticWebsite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference">StorageAccountStaticWebsiteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.error404DocumentInput">Error404DocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.indexDocumentInput">IndexDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts">StorageAccountStaticWebsiteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.error404Document">Error404Document</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.indexDocument">IndexDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.timeouts"></a>

```csharp
public StorageAccountStaticWebsiteTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference">StorageAccountStaticWebsiteTimeoutsOutputReference</a>

---

##### `Error404DocumentInput`<sup>Optional</sup> <a name="Error404DocumentInput" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.error404DocumentInput"></a>

```csharp
public string Error404DocumentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndexDocumentInput`<sup>Optional</sup> <a name="IndexDocumentInput" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.indexDocumentInput"></a>

```csharp
public string IndexDocumentInput { get; }
```

- *Type:* string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.storageAccountIdInput"></a>

```csharp
public string StorageAccountIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.timeoutsInput"></a>

```csharp
public IResolvable|StorageAccountStaticWebsiteTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts">StorageAccountStaticWebsiteTimeouts</a>

---

##### `Error404Document`<sup>Required</sup> <a name="Error404Document" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.error404Document"></a>

```csharp
public string Error404Document { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IndexDocument`<sup>Required</sup> <a name="IndexDocument" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.indexDocument"></a>

```csharp
public string IndexDocument { get; }
```

- *Type:* string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsite.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountStaticWebsiteConfig <a name="StorageAccountStaticWebsiteConfig" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageAccountStaticWebsiteConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string StorageAccountId,
    string Error404Document = null,
    string Id = null,
    string IndexDocument = null,
    StorageAccountStaticWebsiteTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_static_website#storage_account_id StorageAccountStaticWebsite#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig.property.error404Document">Error404Document</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_static_website#error_404_document StorageAccountStaticWebsite#error_404_document}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_static_website#id StorageAccountStaticWebsite#id}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig.property.indexDocument">IndexDocument</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_static_website#index_document StorageAccountStaticWebsite#index_document}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts">StorageAccountStaticWebsiteTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_static_website#storage_account_id StorageAccountStaticWebsite#storage_account_id}.

---

##### `Error404Document`<sup>Optional</sup> <a name="Error404Document" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig.property.error404Document"></a>

```csharp
public string Error404Document { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_static_website#error_404_document StorageAccountStaticWebsite#error_404_document}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_static_website#id StorageAccountStaticWebsite#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndexDocument`<sup>Optional</sup> <a name="IndexDocument" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig.property.indexDocument"></a>

```csharp
public string IndexDocument { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_static_website#index_document StorageAccountStaticWebsite#index_document}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteConfig.property.timeouts"></a>

```csharp
public StorageAccountStaticWebsiteTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts">StorageAccountStaticWebsiteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_static_website#timeouts StorageAccountStaticWebsite#timeouts}

---

### StorageAccountStaticWebsiteTimeouts <a name="StorageAccountStaticWebsiteTimeouts" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageAccountStaticWebsiteTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_static_website#create StorageAccountStaticWebsite#create}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_static_website#delete StorageAccountStaticWebsite#delete}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_static_website#read StorageAccountStaticWebsite#read}. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_static_website#update StorageAccountStaticWebsite#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_static_website#create StorageAccountStaticWebsite#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_static_website#delete StorageAccountStaticWebsite#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_static_website#read StorageAccountStaticWebsite#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_static_website#update StorageAccountStaticWebsite#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountStaticWebsiteTimeoutsOutputReference <a name="StorageAccountStaticWebsiteTimeoutsOutputReference" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new StorageAccountStaticWebsiteTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts">StorageAccountStaticWebsiteTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StorageAccountStaticWebsiteTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.storageAccountStaticWebsite.StorageAccountStaticWebsiteTimeouts">StorageAccountStaticWebsiteTimeouts</a>

---



