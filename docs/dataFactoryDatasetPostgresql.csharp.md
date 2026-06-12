# `dataFactoryDatasetPostgresql` Submodule <a name="`dataFactoryDatasetPostgresql` Submodule" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryDatasetPostgresql <a name="DataFactoryDatasetPostgresql" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql azurerm_data_factory_dataset_postgresql}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryDatasetPostgresql(Construct Scope, string Id, DataFactoryDatasetPostgresqlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig">DataFactoryDatasetPostgresqlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig">DataFactoryDatasetPostgresqlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.putSchemaColumn">PutSchemaColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetSchemaColumn">ResetSchemaColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSchemaColumn` <a name="PutSchemaColumn" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.putSchemaColumn"></a>

```csharp
private void PutSchemaColumn(IResolvable|DataFactoryDatasetPostgresqlSchemaColumn[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.putSchemaColumn.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn">DataFactoryDatasetPostgresqlSchemaColumn</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.putTimeouts"></a>

```csharp
private void PutTimeouts(DataFactoryDatasetPostgresqlTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts">DataFactoryDatasetPostgresqlTimeouts</a>

---

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetAdditionalProperties"></a>

```csharp
private void ResetAdditionalProperties()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetFolder"></a>

```csharp
private void ResetFolder()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetSchemaColumn` <a name="ResetSchemaColumn" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetSchemaColumn"></a>

```csharp
private void ResetSchemaColumn()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetTableName"></a>

```csharp
private void ResetTableName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataFactoryDatasetPostgresql resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataFactoryDatasetPostgresql.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataFactoryDatasetPostgresql.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataFactoryDatasetPostgresql.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataFactoryDatasetPostgresql.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataFactoryDatasetPostgresql resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryDatasetPostgresql to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryDatasetPostgresql that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataFactoryDatasetPostgresql to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.schemaColumn">SchemaColumn</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList">DataFactoryDatasetPostgresqlSchemaColumnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference">DataFactoryDatasetPostgresqlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.annotationsInput">AnnotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.linkedServiceNameInput">LinkedServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.schemaColumnInput">SchemaColumnInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn">DataFactoryDatasetPostgresqlSchemaColumn</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts">DataFactoryDatasetPostgresqlTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.additionalProperties">AdditionalProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.annotations">Annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.linkedServiceName">LinkedServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SchemaColumn`<sup>Required</sup> <a name="SchemaColumn" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.schemaColumn"></a>

```csharp
public DataFactoryDatasetPostgresqlSchemaColumnList SchemaColumn { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList">DataFactoryDatasetPostgresqlSchemaColumnList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.timeouts"></a>

```csharp
public DataFactoryDatasetPostgresqlTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference">DataFactoryDatasetPostgresqlTimeoutsOutputReference</a>

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.additionalPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.annotationsInput"></a>

```csharp
public string[] AnnotationsInput { get; }
```

- *Type:* string[]

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.dataFactoryIdInput"></a>

```csharp
public string DataFactoryIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LinkedServiceNameInput`<sup>Optional</sup> <a name="LinkedServiceNameInput" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.linkedServiceNameInput"></a>

```csharp
public string LinkedServiceNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SchemaColumnInput`<sup>Optional</sup> <a name="SchemaColumnInput" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.schemaColumnInput"></a>

```csharp
public IResolvable|DataFactoryDatasetPostgresqlSchemaColumn[] SchemaColumnInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn">DataFactoryDatasetPostgresqlSchemaColumn</a>[]

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.timeoutsInput"></a>

```csharp
public IResolvable|DataFactoryDatasetPostgresqlTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts">DataFactoryDatasetPostgresqlTimeouts</a>

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.additionalProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.annotations"></a>

```csharp
public string[] Annotations { get; }
```

- *Type:* string[]

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.linkedServiceName"></a>

```csharp
public string LinkedServiceName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresql.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryDatasetPostgresqlConfig <a name="DataFactoryDatasetPostgresqlConfig" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryDatasetPostgresqlConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataFactoryId,
    string LinkedServiceName,
    string Name,
    System.Collections.Generic.IDictionary<string, string> AdditionalProperties = null,
    string[] Annotations = null,
    string Description = null,
    string Folder = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    IResolvable|DataFactoryDatasetPostgresqlSchemaColumn[] SchemaColumn = null,
    string TableName = null,
    DataFactoryDatasetPostgresqlTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#data_factory_id DataFactoryDatasetPostgresql#data_factory_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.linkedServiceName">LinkedServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#linked_service_name DataFactoryDatasetPostgresql#linked_service_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#name DataFactoryDatasetPostgresql#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.additionalProperties">AdditionalProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#additional_properties DataFactoryDatasetPostgresql#additional_properties}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.annotations">Annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#annotations DataFactoryDatasetPostgresql#annotations}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#description DataFactoryDatasetPostgresql#description}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.folder">Folder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#folder DataFactoryDatasetPostgresql#folder}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#id DataFactoryDatasetPostgresql#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#parameters DataFactoryDatasetPostgresql#parameters}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.schemaColumn">SchemaColumn</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn">DataFactoryDatasetPostgresqlSchemaColumn</a>[]</code> | schema_column block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#table_name DataFactoryDatasetPostgresql#table_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts">DataFactoryDatasetPostgresqlTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#data_factory_id DataFactoryDatasetPostgresql#data_factory_id}.

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.linkedServiceName"></a>

```csharp
public string LinkedServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#linked_service_name DataFactoryDatasetPostgresql#linked_service_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#name DataFactoryDatasetPostgresql#name}.

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.additionalProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#additional_properties DataFactoryDatasetPostgresql#additional_properties}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.annotations"></a>

```csharp
public string[] Annotations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#annotations DataFactoryDatasetPostgresql#annotations}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#description DataFactoryDatasetPostgresql#description}.

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#folder DataFactoryDatasetPostgresql#folder}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#id DataFactoryDatasetPostgresql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#parameters DataFactoryDatasetPostgresql#parameters}.

---

##### `SchemaColumn`<sup>Optional</sup> <a name="SchemaColumn" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.schemaColumn"></a>

```csharp
public IResolvable|DataFactoryDatasetPostgresqlSchemaColumn[] SchemaColumn { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn">DataFactoryDatasetPostgresqlSchemaColumn</a>[]

schema_column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#schema_column DataFactoryDatasetPostgresql#schema_column}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#table_name DataFactoryDatasetPostgresql#table_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlConfig.property.timeouts"></a>

```csharp
public DataFactoryDatasetPostgresqlTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts">DataFactoryDatasetPostgresqlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#timeouts DataFactoryDatasetPostgresql#timeouts}

---

### DataFactoryDatasetPostgresqlSchemaColumn <a name="DataFactoryDatasetPostgresqlSchemaColumn" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryDatasetPostgresqlSchemaColumn {
    string Name,
    string Description = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#name DataFactoryDatasetPostgresql#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#description DataFactoryDatasetPostgresql#description}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#type DataFactoryDatasetPostgresql#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#name DataFactoryDatasetPostgresql#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#description DataFactoryDatasetPostgresql#description}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#type DataFactoryDatasetPostgresql#type}.

---

### DataFactoryDatasetPostgresqlTimeouts <a name="DataFactoryDatasetPostgresqlTimeouts" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryDatasetPostgresqlTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#create DataFactoryDatasetPostgresql#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#delete DataFactoryDatasetPostgresql#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#read DataFactoryDatasetPostgresql#read}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#update DataFactoryDatasetPostgresql#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#create DataFactoryDatasetPostgresql#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#delete DataFactoryDatasetPostgresql#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#read DataFactoryDatasetPostgresql#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/data_factory_dataset_postgresql#update DataFactoryDatasetPostgresql#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryDatasetPostgresqlSchemaColumnList <a name="DataFactoryDatasetPostgresqlSchemaColumnList" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryDatasetPostgresqlSchemaColumnList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.get"></a>

```csharp
private DataFactoryDatasetPostgresqlSchemaColumnOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn">DataFactoryDatasetPostgresqlSchemaColumn</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnList.property.internalValue"></a>

```csharp
public IResolvable|DataFactoryDatasetPostgresqlSchemaColumn[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn">DataFactoryDatasetPostgresqlSchemaColumn</a>[]

---


### DataFactoryDatasetPostgresqlSchemaColumnOutputReference <a name="DataFactoryDatasetPostgresqlSchemaColumnOutputReference" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryDatasetPostgresqlSchemaColumnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn">DataFactoryDatasetPostgresqlSchemaColumn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumnOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataFactoryDatasetPostgresqlSchemaColumn InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlSchemaColumn">DataFactoryDatasetPostgresqlSchemaColumn</a>

---


### DataFactoryDatasetPostgresqlTimeoutsOutputReference <a name="DataFactoryDatasetPostgresqlTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryDatasetPostgresqlTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts">DataFactoryDatasetPostgresqlTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataFactoryDatasetPostgresqlTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetPostgresql.DataFactoryDatasetPostgresqlTimeouts">DataFactoryDatasetPostgresqlTimeouts</a>

---



