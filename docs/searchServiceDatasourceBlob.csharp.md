# `searchServiceDatasourceBlob` Submodule <a name="`searchServiceDatasourceBlob` Submodule" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SearchServiceDatasourceBlob <a name="SearchServiceDatasourceBlob" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob azurerm_search_service_datasource_blob}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SearchServiceDatasourceBlob(Construct Scope, string Id, SearchServiceDatasourceBlobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig">SearchServiceDatasourceBlobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig">SearchServiceDatasourceBlobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putEncryptionKey">PutEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetContainerQuery">ResetContainerQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetEncryptionKey">ResetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetSoftDeleteColumnName">ResetSoftDeleteColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetSoftDeleteMarkerValue">ResetSoftDeleteMarkerValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionKey` <a name="PutEncryptionKey" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putEncryptionKey"></a>

```csharp
private void PutEncryptionKey(SearchServiceDatasourceBlobEncryptionKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putTimeouts"></a>

```csharp
private void PutTimeouts(SearchServiceDatasourceBlobTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a>

---

##### `ResetContainerQuery` <a name="ResetContainerQuery" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetContainerQuery"></a>

```csharp
private void ResetContainerQuery()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionKey` <a name="ResetEncryptionKey" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetEncryptionKey"></a>

```csharp
private void ResetEncryptionKey()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSoftDeleteColumnName` <a name="ResetSoftDeleteColumnName" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetSoftDeleteColumnName"></a>

```csharp
private void ResetSoftDeleteColumnName()
```

##### `ResetSoftDeleteMarkerValue` <a name="ResetSoftDeleteMarkerValue" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetSoftDeleteMarkerValue"></a>

```csharp
private void ResetSoftDeleteMarkerValue()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SearchServiceDatasourceBlob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SearchServiceDatasourceBlob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SearchServiceDatasourceBlob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SearchServiceDatasourceBlob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

SearchServiceDatasourceBlob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SearchServiceDatasourceBlob resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SearchServiceDatasourceBlob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SearchServiceDatasourceBlob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SearchServiceDatasourceBlob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference">SearchServiceDatasourceBlobEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference">SearchServiceDatasourceBlobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoInput">ConnectionStringWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoVersionInput">ConnectionStringWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerNameInput">ContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerQueryInput">ContainerQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.encryptionKeyInput">EncryptionKeyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.searchServiceEndpointInput">SearchServiceEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteColumnNameInput">SoftDeleteColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteMarkerValueInput">SoftDeleteMarkerValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWo">ConnectionStringWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoVersion">ConnectionStringWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerName">ContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerQuery">ContainerQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.searchServiceEndpoint">SearchServiceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteColumnName">SoftDeleteColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteMarkerValue">SoftDeleteMarkerValue</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.encryptionKey"></a>

```csharp
public SearchServiceDatasourceBlobEncryptionKeyOutputReference EncryptionKey { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference">SearchServiceDatasourceBlobEncryptionKeyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.timeouts"></a>

```csharp
public SearchServiceDatasourceBlobTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference">SearchServiceDatasourceBlobTimeoutsOutputReference</a>

---

##### `ConnectionStringWoInput`<sup>Optional</sup> <a name="ConnectionStringWoInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoInput"></a>

```csharp
public string ConnectionStringWoInput { get; }
```

- *Type:* string

---

##### `ConnectionStringWoVersionInput`<sup>Optional</sup> <a name="ConnectionStringWoVersionInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoVersionInput"></a>

```csharp
public double ConnectionStringWoVersionInput { get; }
```

- *Type:* double

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerNameInput"></a>

```csharp
public string ContainerNameInput { get; }
```

- *Type:* string

---

##### `ContainerQueryInput`<sup>Optional</sup> <a name="ContainerQueryInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerQueryInput"></a>

```csharp
public string ContainerQueryInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EncryptionKeyInput`<sup>Optional</sup> <a name="EncryptionKeyInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.encryptionKeyInput"></a>

```csharp
public SearchServiceDatasourceBlobEncryptionKey EncryptionKeyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SearchServiceEndpointInput`<sup>Optional</sup> <a name="SearchServiceEndpointInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.searchServiceEndpointInput"></a>

```csharp
public string SearchServiceEndpointInput { get; }
```

- *Type:* string

---

##### `SoftDeleteColumnNameInput`<sup>Optional</sup> <a name="SoftDeleteColumnNameInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteColumnNameInput"></a>

```csharp
public string SoftDeleteColumnNameInput { get; }
```

- *Type:* string

---

##### `SoftDeleteMarkerValueInput`<sup>Optional</sup> <a name="SoftDeleteMarkerValueInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteMarkerValueInput"></a>

```csharp
public string SoftDeleteMarkerValueInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.timeoutsInput"></a>

```csharp
public IResolvable|SearchServiceDatasourceBlobTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a>

---

##### ~~`ConnectionStringWo`~~<sup>Required</sup> <a name="ConnectionStringWo" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public string ConnectionStringWo { get; }
```

- *Type:* string

---

##### `ConnectionStringWoVersion`<sup>Required</sup> <a name="ConnectionStringWoVersion" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.connectionStringWoVersion"></a>

```csharp
public double ConnectionStringWoVersion { get; }
```

- *Type:* double

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerName"></a>

```csharp
public string ContainerName { get; }
```

- *Type:* string

---

##### `ContainerQuery`<sup>Required</sup> <a name="ContainerQuery" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.containerQuery"></a>

```csharp
public string ContainerQuery { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SearchServiceEndpoint`<sup>Required</sup> <a name="SearchServiceEndpoint" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.searchServiceEndpoint"></a>

```csharp
public string SearchServiceEndpoint { get; }
```

- *Type:* string

---

##### `SoftDeleteColumnName`<sup>Required</sup> <a name="SoftDeleteColumnName" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteColumnName"></a>

```csharp
public string SoftDeleteColumnName { get; }
```

- *Type:* string

---

##### `SoftDeleteMarkerValue`<sup>Required</sup> <a name="SoftDeleteMarkerValue" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.softDeleteMarkerValue"></a>

```csharp
public string SoftDeleteMarkerValue { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SearchServiceDatasourceBlobConfig <a name="SearchServiceDatasourceBlobConfig" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SearchServiceDatasourceBlobConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ConnectionStringWo,
    double ConnectionStringWoVersion,
    string ContainerName,
    string Name,
    string SearchServiceEndpoint,
    string ContainerQuery = null,
    string Description = null,
    SearchServiceDatasourceBlobEncryptionKey EncryptionKey = null,
    string Id = null,
    string SoftDeleteColumnName = null,
    string SoftDeleteMarkerValue = null,
    SearchServiceDatasourceBlobTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connectionStringWo">ConnectionStringWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo SearchServiceDatasourceBlob#connection_string_wo}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connectionStringWoVersion">ConnectionStringWoVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo_version SearchServiceDatasourceBlob#connection_string_wo_version}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.containerName">ContainerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_name SearchServiceDatasourceBlob#container_name}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#name SearchServiceDatasourceBlob#name}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.searchServiceEndpoint">SearchServiceEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#search_service_endpoint SearchServiceDatasourceBlob#search_service_endpoint}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.containerQuery">ContainerQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_query SearchServiceDatasourceBlob#container_query}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#description SearchServiceDatasourceBlob#description}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#id SearchServiceDatasourceBlob#id}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.softDeleteColumnName">SoftDeleteColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_column_name SearchServiceDatasourceBlob#soft_delete_column_name}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.softDeleteMarkerValue">SoftDeleteMarkerValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_marker_value SearchServiceDatasourceBlob#soft_delete_marker_value}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConnectionStringWo`<sup>Required</sup> <a name="ConnectionStringWo" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connectionStringWo"></a>

```csharp
public string ConnectionStringWo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo SearchServiceDatasourceBlob#connection_string_wo}.

---

##### `ConnectionStringWoVersion`<sup>Required</sup> <a name="ConnectionStringWoVersion" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.connectionStringWoVersion"></a>

```csharp
public double ConnectionStringWoVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo_version SearchServiceDatasourceBlob#connection_string_wo_version}.

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.containerName"></a>

```csharp
public string ContainerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_name SearchServiceDatasourceBlob#container_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#name SearchServiceDatasourceBlob#name}.

---

##### `SearchServiceEndpoint`<sup>Required</sup> <a name="SearchServiceEndpoint" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.searchServiceEndpoint"></a>

```csharp
public string SearchServiceEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#search_service_endpoint SearchServiceDatasourceBlob#search_service_endpoint}.

---

##### `ContainerQuery`<sup>Optional</sup> <a name="ContainerQuery" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.containerQuery"></a>

```csharp
public string ContainerQuery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_query SearchServiceDatasourceBlob#container_query}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#description SearchServiceDatasourceBlob#description}.

---

##### `EncryptionKey`<sup>Optional</sup> <a name="EncryptionKey" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.encryptionKey"></a>

```csharp
public SearchServiceDatasourceBlobEncryptionKey EncryptionKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#encryption_key SearchServiceDatasourceBlob#encryption_key}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#id SearchServiceDatasourceBlob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SoftDeleteColumnName`<sup>Optional</sup> <a name="SoftDeleteColumnName" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.softDeleteColumnName"></a>

```csharp
public string SoftDeleteColumnName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_column_name SearchServiceDatasourceBlob#soft_delete_column_name}.

---

##### `SoftDeleteMarkerValue`<sup>Optional</sup> <a name="SoftDeleteMarkerValue" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.softDeleteMarkerValue"></a>

```csharp
public string SoftDeleteMarkerValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_marker_value SearchServiceDatasourceBlob#soft_delete_marker_value}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobConfig.property.timeouts"></a>

```csharp
public SearchServiceDatasourceBlobTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#timeouts SearchServiceDatasourceBlob#timeouts}

---

### SearchServiceDatasourceBlobEncryptionKey <a name="SearchServiceDatasourceBlobEncryptionKey" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SearchServiceDatasourceBlobEncryptionKey {
    string KeyVaultKeyId,
    string ClientId = null,
    string ClientSecret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#key_vault_key_id SearchServiceDatasourceBlob#key_vault_key_id}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#client_id SearchServiceDatasourceBlob#client_id}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#client_secret SearchServiceDatasourceBlob#client_secret}. |

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#key_vault_key_id SearchServiceDatasourceBlob#key_vault_key_id}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#client_id SearchServiceDatasourceBlob#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#client_secret SearchServiceDatasourceBlob#client_secret}.

---

### SearchServiceDatasourceBlobTimeouts <a name="SearchServiceDatasourceBlobTimeouts" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SearchServiceDatasourceBlobTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#create SearchServiceDatasourceBlob#create}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#delete SearchServiceDatasourceBlob#delete}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#read SearchServiceDatasourceBlob#read}. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#update SearchServiceDatasourceBlob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#create SearchServiceDatasourceBlob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#delete SearchServiceDatasourceBlob#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#read SearchServiceDatasourceBlob#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#update SearchServiceDatasourceBlob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SearchServiceDatasourceBlobEncryptionKeyOutputReference <a name="SearchServiceDatasourceBlobEncryptionKeyOutputReference" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SearchServiceDatasourceBlobEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.keyVaultKeyIdInput"></a>

```csharp
public string KeyVaultKeyIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public SearchServiceDatasourceBlobEncryptionKey InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobEncryptionKey">SearchServiceDatasourceBlobEncryptionKey</a>

---


### SearchServiceDatasourceBlobTimeoutsOutputReference <a name="SearchServiceDatasourceBlobTimeoutsOutputReference" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new SearchServiceDatasourceBlobTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SearchServiceDatasourceBlobTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.searchServiceDatasourceBlob.SearchServiceDatasourceBlobTimeouts">SearchServiceDatasourceBlobTimeouts</a>

---



