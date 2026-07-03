# `dataFactoryDatasetMysql` Submodule <a name="`dataFactoryDatasetMysql` Submodule" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryDatasetMysql <a name="DataFactoryDatasetMysql" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql azurerm_data_factory_dataset_mysql}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryDatasetMysql(Construct Scope, string Id, DataFactoryDatasetMysqlConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig">DataFactoryDatasetMysqlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig">DataFactoryDatasetMysqlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.putSchemaColumn">PutSchemaColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetSchemaColumn">ResetSchemaColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSchemaColumn` <a name="PutSchemaColumn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.putSchemaColumn"></a>

```csharp
private void PutSchemaColumn(IResolvable|DataFactoryDatasetMysqlSchemaColumn[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.putSchemaColumn.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn">DataFactoryDatasetMysqlSchemaColumn</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.putTimeouts"></a>

```csharp
private void PutTimeouts(DataFactoryDatasetMysqlTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts">DataFactoryDatasetMysqlTimeouts</a>

---

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetAdditionalProperties"></a>

```csharp
private void ResetAdditionalProperties()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetFolder"></a>

```csharp
private void ResetFolder()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetSchemaColumn` <a name="ResetSchemaColumn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetSchemaColumn"></a>

```csharp
private void ResetSchemaColumn()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetTableName"></a>

```csharp
private void ResetTableName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataFactoryDatasetMysql resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataFactoryDatasetMysql.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataFactoryDatasetMysql.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataFactoryDatasetMysql.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataFactoryDatasetMysql.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataFactoryDatasetMysql resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryDatasetMysql to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryDatasetMysql that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataFactoryDatasetMysql to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.schemaColumn">SchemaColumn</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList">DataFactoryDatasetMysqlSchemaColumnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference">DataFactoryDatasetMysqlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.annotationsInput">AnnotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.linkedServiceNameInput">LinkedServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.schemaColumnInput">SchemaColumnInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn">DataFactoryDatasetMysqlSchemaColumn</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts">DataFactoryDatasetMysqlTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.additionalProperties">AdditionalProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.annotations">Annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.linkedServiceName">LinkedServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SchemaColumn`<sup>Required</sup> <a name="SchemaColumn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.schemaColumn"></a>

```csharp
public DataFactoryDatasetMysqlSchemaColumnList SchemaColumn { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList">DataFactoryDatasetMysqlSchemaColumnList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.timeouts"></a>

```csharp
public DataFactoryDatasetMysqlTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference">DataFactoryDatasetMysqlTimeoutsOutputReference</a>

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.additionalPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.annotationsInput"></a>

```csharp
public string[] AnnotationsInput { get; }
```

- *Type:* string[]

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.dataFactoryIdInput"></a>

```csharp
public string DataFactoryIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LinkedServiceNameInput`<sup>Optional</sup> <a name="LinkedServiceNameInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.linkedServiceNameInput"></a>

```csharp
public string LinkedServiceNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SchemaColumnInput`<sup>Optional</sup> <a name="SchemaColumnInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.schemaColumnInput"></a>

```csharp
public IResolvable|DataFactoryDatasetMysqlSchemaColumn[] SchemaColumnInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn">DataFactoryDatasetMysqlSchemaColumn</a>[]

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.timeoutsInput"></a>

```csharp
public IResolvable|DataFactoryDatasetMysqlTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts">DataFactoryDatasetMysqlTimeouts</a>

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.additionalProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.annotations"></a>

```csharp
public string[] Annotations { get; }
```

- *Type:* string[]

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.linkedServiceName"></a>

```csharp
public string LinkedServiceName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysql.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryDatasetMysqlConfig <a name="DataFactoryDatasetMysqlConfig" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryDatasetMysqlConfig {
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
    IResolvable|DataFactoryDatasetMysqlSchemaColumn[] SchemaColumn = null,
    string TableName = null,
    DataFactoryDatasetMysqlTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#data_factory_id DataFactoryDatasetMysql#data_factory_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.linkedServiceName">LinkedServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#linked_service_name DataFactoryDatasetMysql#linked_service_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#name DataFactoryDatasetMysql#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.additionalProperties">AdditionalProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#additional_properties DataFactoryDatasetMysql#additional_properties}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.annotations">Annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#annotations DataFactoryDatasetMysql#annotations}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#description DataFactoryDatasetMysql#description}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.folder">Folder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#folder DataFactoryDatasetMysql#folder}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#id DataFactoryDatasetMysql#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#parameters DataFactoryDatasetMysql#parameters}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.schemaColumn">SchemaColumn</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn">DataFactoryDatasetMysqlSchemaColumn</a>[]</code> | schema_column block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#table_name DataFactoryDatasetMysql#table_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts">DataFactoryDatasetMysqlTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#data_factory_id DataFactoryDatasetMysql#data_factory_id}.

---

##### `LinkedServiceName`<sup>Required</sup> <a name="LinkedServiceName" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.linkedServiceName"></a>

```csharp
public string LinkedServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#linked_service_name DataFactoryDatasetMysql#linked_service_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#name DataFactoryDatasetMysql#name}.

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.additionalProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#additional_properties DataFactoryDatasetMysql#additional_properties}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.annotations"></a>

```csharp
public string[] Annotations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#annotations DataFactoryDatasetMysql#annotations}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#description DataFactoryDatasetMysql#description}.

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#folder DataFactoryDatasetMysql#folder}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#id DataFactoryDatasetMysql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#parameters DataFactoryDatasetMysql#parameters}.

---

##### `SchemaColumn`<sup>Optional</sup> <a name="SchemaColumn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.schemaColumn"></a>

```csharp
public IResolvable|DataFactoryDatasetMysqlSchemaColumn[] SchemaColumn { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn">DataFactoryDatasetMysqlSchemaColumn</a>[]

schema_column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#schema_column DataFactoryDatasetMysql#schema_column}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#table_name DataFactoryDatasetMysql#table_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlConfig.property.timeouts"></a>

```csharp
public DataFactoryDatasetMysqlTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts">DataFactoryDatasetMysqlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#timeouts DataFactoryDatasetMysql#timeouts}

---

### DataFactoryDatasetMysqlSchemaColumn <a name="DataFactoryDatasetMysqlSchemaColumn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryDatasetMysqlSchemaColumn {
    string Name,
    string Description = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#name DataFactoryDatasetMysql#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#description DataFactoryDatasetMysql#description}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#type DataFactoryDatasetMysql#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#name DataFactoryDatasetMysql#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#description DataFactoryDatasetMysql#description}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#type DataFactoryDatasetMysql#type}.

---

### DataFactoryDatasetMysqlTimeouts <a name="DataFactoryDatasetMysqlTimeouts" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryDatasetMysqlTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#create DataFactoryDatasetMysql#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#delete DataFactoryDatasetMysql#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#read DataFactoryDatasetMysql#read}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#update DataFactoryDatasetMysql#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#create DataFactoryDatasetMysql#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#delete DataFactoryDatasetMysql#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#read DataFactoryDatasetMysql#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_dataset_mysql#update DataFactoryDatasetMysql#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryDatasetMysqlSchemaColumnList <a name="DataFactoryDatasetMysqlSchemaColumnList" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryDatasetMysqlSchemaColumnList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.get"></a>

```csharp
private DataFactoryDatasetMysqlSchemaColumnOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn">DataFactoryDatasetMysqlSchemaColumn</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnList.property.internalValue"></a>

```csharp
public IResolvable|DataFactoryDatasetMysqlSchemaColumn[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn">DataFactoryDatasetMysqlSchemaColumn</a>[]

---


### DataFactoryDatasetMysqlSchemaColumnOutputReference <a name="DataFactoryDatasetMysqlSchemaColumnOutputReference" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryDatasetMysqlSchemaColumnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn">DataFactoryDatasetMysqlSchemaColumn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumnOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataFactoryDatasetMysqlSchemaColumn InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlSchemaColumn">DataFactoryDatasetMysqlSchemaColumn</a>

---


### DataFactoryDatasetMysqlTimeoutsOutputReference <a name="DataFactoryDatasetMysqlTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataFactoryDatasetMysqlTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts">DataFactoryDatasetMysqlTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataFactoryDatasetMysqlTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryDatasetMysql.DataFactoryDatasetMysqlTimeouts">DataFactoryDatasetMysqlTimeouts</a>

---



