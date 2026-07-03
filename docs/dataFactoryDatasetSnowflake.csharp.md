# `dataFactoryDatasetSnowflake` Submodule <a name="`dataFactoryDatasetSnowflake` Submodule" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryDatasetSnowflake <a name="DataFactoryDatasetSnowflake" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake azurerm_data_factory_dataset_snowflake}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryDatasetSnowflake(Construct Scope, string Id, DataFactoryDatasetSnowflakeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig">DataFactoryDatasetSnowflakeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig">DataFactoryDatasetSnowflakeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.putSchemaColumn">PutSchemaColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.resetSchemaColumn">ResetSchemaColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSchemaColumn` <a name="PutSchemaColumn" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.putSchemaColumn"></a>

```csharp
private void PutSchemaColumn(IResolvable|DataFactoryDatasetSnowflakeSchemaColumn[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.putSchemaColumn.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumn">DataFactoryDatasetSnowflakeSchemaColumn</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.putTimeouts"></a>

```csharp
private void PutTimeouts(DataFactoryDatasetSnowflakeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeouts">DataFactoryDatasetSnowflakeTimeouts</a>

---

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.resetAdditionalProperties"></a>

```csharp
private void ResetAdditionalProperties()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.resetFolder"></a>

```csharp
private void ResetFolder()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetSchemaColumn` <a name="ResetSchemaColumn" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.resetSchemaColumn"></a>

```csharp
private void ResetSchemaColumn()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.resetTableName"></a>

```csharp
private void ResetTableName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataFactoryDatasetSnowflake resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataFactoryDatasetSnowflake.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataFactoryDatasetSnowflake.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataFactoryDatasetSnowflake.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataFactoryDatasetSnowflake.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataFactoryDatasetSnowflake resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryDatasetSnowflake to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryDatasetSnowflake that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataFactoryDatasetSnowflake to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.schemaColumn">SchemaColumn</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList">DataFactoryDatasetSnowflakeSchemaColumnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference">DataFactoryDatasetSnowflakeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.annotationsInput">AnnotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.linkedServiceNameInput">LinkedServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.schemaColumnInput">SchemaColumnInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumn">DataFactoryDatasetSnowflakeSchemaColumn</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeouts">DataFactoryDatasetSnowflakeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.additionalProperties">AdditionalProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.annotations">Annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.linkedServiceName">LinkedServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SchemaColumn`<sup>Required</sup> <a name="SchemaColumn" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.schemaColumn"></a>

```csharp
public DataFactoryDatasetSnowflakeSchemaColumnList SchemaColumn { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList">DataFactoryDatasetSnowflakeSchemaColumnList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.timeouts"></a>

```csharp
public DataFactoryDatasetSnowflakeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference">DataFactoryDatasetSnowflakeTimeoutsOutputReference</a>

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.additionalPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.annotationsInput"></a>

```csharp
public string[] AnnotationsInput { get; }
```

- *Type:* string[]

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.dataFactoryIdInput"></a>

```csharp
public string DataFactoryIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LinkedServiceNameInput`<sup>Optional</sup> <a name="LinkedServiceNameInput" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.linkedServiceNameInput"></a>

```csharp
public string LinkedServiceNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SchemaColumnInput`<sup>Optional</sup> <a name="SchemaColumnInput" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.schemaColumnInput"></a>

```csharp
public IResolvable|DataFactoryDatasetSnowflakeSchemaColumn[] SchemaColumnInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumn">DataFactoryDatasetSnowflakeSchemaColumn</a>[]

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.timeoutsInput"></a>

```csharp
public IResolvable|DataFactoryDatasetSnowflakeTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeouts">DataFactoryDatasetSnowflakeTimeouts</a>

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.additionalProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.annotations"></a>

```csharp
public string[] Annotations { get; }
```

- *Type:* string[]

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.linkedServiceName"></a>

```csharp
public string LinkedServiceName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflake.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryDatasetSnowflakeConfig <a name="DataFactoryDatasetSnowflakeConfig" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryDatasetSnowflakeConfig {
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
    IResolvable|DataFactoryDatasetSnowflakeSchemaColumn[] SchemaColumn = null,
    string SchemaName = null,
    string TableName = null,
    DataFactoryDatasetSnowflakeTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#data_factory_id DataFactoryDatasetSnowflake#data_factory_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.linkedServiceName">LinkedServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#linked_service_name DataFactoryDatasetSnowflake#linked_service_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#name DataFactoryDatasetSnowflake#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.additionalProperties">AdditionalProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#additional_properties DataFactoryDatasetSnowflake#additional_properties}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.annotations">Annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#annotations DataFactoryDatasetSnowflake#annotations}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#description DataFactoryDatasetSnowflake#description}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.folder">Folder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#folder DataFactoryDatasetSnowflake#folder}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#id DataFactoryDatasetSnowflake#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#parameters DataFactoryDatasetSnowflake#parameters}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.schemaColumn">SchemaColumn</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumn">DataFactoryDatasetSnowflakeSchemaColumn</a>[]</code> | schema_column block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.schemaName">SchemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#schema_name DataFactoryDatasetSnowflake#schema_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#table_name DataFactoryDatasetSnowflake#table_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeouts">DataFactoryDatasetSnowflakeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#data_factory_id DataFactoryDatasetSnowflake#data_factory_id}.

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.linkedServiceName"></a>

```csharp
public string LinkedServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#linked_service_name DataFactoryDatasetSnowflake#linked_service_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#name DataFactoryDatasetSnowflake#name}.

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.additionalProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#additional_properties DataFactoryDatasetSnowflake#additional_properties}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.annotations"></a>

```csharp
public string[] Annotations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#annotations DataFactoryDatasetSnowflake#annotations}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#description DataFactoryDatasetSnowflake#description}.

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#folder DataFactoryDatasetSnowflake#folder}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#id DataFactoryDatasetSnowflake#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#parameters DataFactoryDatasetSnowflake#parameters}.

---

##### `SchemaColumn`<sup>Optional</sup> <a name="SchemaColumn" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.schemaColumn"></a>

```csharp
public IResolvable|DataFactoryDatasetSnowflakeSchemaColumn[] SchemaColumn { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumn">DataFactoryDatasetSnowflakeSchemaColumn</a>[]

schema_column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#schema_column DataFactoryDatasetSnowflake#schema_column}

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#schema_name DataFactoryDatasetSnowflake#schema_name}.

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#table_name DataFactoryDatasetSnowflake#table_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeConfig.property.timeouts"></a>

```csharp
public DataFactoryDatasetSnowflakeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeouts">DataFactoryDatasetSnowflakeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#timeouts DataFactoryDatasetSnowflake#timeouts}

---

### DataFactoryDatasetSnowflakeSchemaColumn <a name="DataFactoryDatasetSnowflakeSchemaColumn" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryDatasetSnowflakeSchemaColumn {
    string Name,
    double Precision = null,
    double Scale = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumn.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#name DataFactoryDatasetSnowflake#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumn.property.precision">Precision</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#precision DataFactoryDatasetSnowflake#precision}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumn.property.scale">Scale</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#scale DataFactoryDatasetSnowflake#scale}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumn.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#type DataFactoryDatasetSnowflake#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumn.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#name DataFactoryDatasetSnowflake#name}.

---

##### `Precision`<sup>Optional</sup> <a name="Precision" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumn.property.precision"></a>

```csharp
public double Precision { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#precision DataFactoryDatasetSnowflake#precision}.

---

##### `Scale`<sup>Optional</sup> <a name="Scale" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumn.property.scale"></a>

```csharp
public double Scale { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#scale DataFactoryDatasetSnowflake#scale}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumn.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#type DataFactoryDatasetSnowflake#type}.

---

### DataFactoryDatasetSnowflakeTimeouts <a name="DataFactoryDatasetSnowflakeTimeouts" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryDatasetSnowflakeTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#create DataFactoryDatasetSnowflake#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#delete DataFactoryDatasetSnowflake#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#read DataFactoryDatasetSnowflake#read}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#update DataFactoryDatasetSnowflake#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#create DataFactoryDatasetSnowflake#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#delete DataFactoryDatasetSnowflake#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#read DataFactoryDatasetSnowflake#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_snowflake#update DataFactoryDatasetSnowflake#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryDatasetSnowflakeSchemaColumnList <a name="DataFactoryDatasetSnowflakeSchemaColumnList" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryDatasetSnowflakeSchemaColumnList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList.get"></a>

```csharp
private DataFactoryDatasetSnowflakeSchemaColumnOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumn">DataFactoryDatasetSnowflakeSchemaColumn</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnList.property.internalValue"></a>

```csharp
public IResolvable|DataFactoryDatasetSnowflakeSchemaColumn[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumn">DataFactoryDatasetSnowflakeSchemaColumn</a>[]

---


### DataFactoryDatasetSnowflakeSchemaColumnOutputReference <a name="DataFactoryDatasetSnowflakeSchemaColumnOutputReference" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryDatasetSnowflakeSchemaColumnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.resetPrecision">ResetPrecision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.resetScale">ResetScale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrecision` <a name="ResetPrecision" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.resetPrecision"></a>

```csharp
private void ResetPrecision()
```

##### `ResetScale` <a name="ResetScale" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.resetScale"></a>

```csharp
private void ResetScale()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.property.precisionInput">PrecisionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.property.scaleInput">ScaleInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.property.precision">Precision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.property.scale">Scale</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumn">DataFactoryDatasetSnowflakeSchemaColumn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrecisionInput`<sup>Optional</sup> <a name="PrecisionInput" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.property.precisionInput"></a>

```csharp
public double PrecisionInput { get; }
```

- *Type:* double

---

##### `ScaleInput`<sup>Optional</sup> <a name="ScaleInput" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.property.scaleInput"></a>

```csharp
public double ScaleInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Precision`<sup>Required</sup> <a name="Precision" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.property.precision"></a>

```csharp
public double Precision { get; }
```

- *Type:* double

---

##### `Scale`<sup>Required</sup> <a name="Scale" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.property.scale"></a>

```csharp
public double Scale { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumnOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataFactoryDatasetSnowflakeSchemaColumn InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeSchemaColumn">DataFactoryDatasetSnowflakeSchemaColumn</a>

---


### DataFactoryDatasetSnowflakeTimeoutsOutputReference <a name="DataFactoryDatasetSnowflakeTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryDatasetSnowflakeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeouts">DataFactoryDatasetSnowflakeTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataFactoryDatasetSnowflakeTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetSnowflake.DataFactoryDatasetSnowflakeTimeouts">DataFactoryDatasetSnowflakeTimeouts</a>

---



