# `dataAzurermDataShareDatasetKustoDatabase` Submodule <a name="`dataAzurermDataShareDatasetKustoDatabase` Submodule" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermDataShareDatasetKustoDatabase <a name="DataAzurermDataShareDatasetKustoDatabase" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/data_share_dataset_kusto_database azurerm_data_share_dataset_kusto_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermDataShareDatasetKustoDatabase(Construct Scope, string Id, DataAzurermDataShareDatasetKustoDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseConfig">DataAzurermDataShareDatasetKustoDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseConfig">DataAzurermDataShareDatasetKustoDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermDataShareDatasetKustoDatabaseTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeouts">DataAzurermDataShareDatasetKustoDatabaseTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermDataShareDatasetKustoDatabase resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermDataShareDatasetKustoDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermDataShareDatasetKustoDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermDataShareDatasetKustoDatabase.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermDataShareDatasetKustoDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAzurermDataShareDatasetKustoDatabase resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermDataShareDatasetKustoDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermDataShareDatasetKustoDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/data_share_dataset_kusto_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermDataShareDatasetKustoDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.kustoClusterLocation">KustoClusterLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.kustoDatabaseId">KustoDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference">DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.shareIdInput">ShareIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeouts">DataAzurermDataShareDatasetKustoDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.shareId">ShareId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `KustoClusterLocation`<sup>Required</sup> <a name="KustoClusterLocation" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.kustoClusterLocation"></a>

```csharp
public string KustoClusterLocation { get; }
```

- *Type:* string

---

##### `KustoDatabaseId`<sup>Required</sup> <a name="KustoDatabaseId" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.kustoDatabaseId"></a>

```csharp
public string KustoDatabaseId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.timeouts"></a>

```csharp
public DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference">DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ShareIdInput`<sup>Optional</sup> <a name="ShareIdInput" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.shareIdInput"></a>

```csharp
public string ShareIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAzurermDataShareDatasetKustoDatabaseTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeouts">DataAzurermDataShareDatasetKustoDatabaseTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ShareId`<sup>Required</sup> <a name="ShareId" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.shareId"></a>

```csharp
public string ShareId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermDataShareDatasetKustoDatabaseConfig <a name="DataAzurermDataShareDatasetKustoDatabaseConfig" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermDataShareDatasetKustoDatabaseConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string ShareId,
    string Id = null,
    DataAzurermDataShareDatasetKustoDatabaseTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/data_share_dataset_kusto_database#name DataAzurermDataShareDatasetKustoDatabase#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseConfig.property.shareId">ShareId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/data_share_dataset_kusto_database#share_id DataAzurermDataShareDatasetKustoDatabase#share_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/data_share_dataset_kusto_database#id DataAzurermDataShareDatasetKustoDatabase#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeouts">DataAzurermDataShareDatasetKustoDatabaseTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/data_share_dataset_kusto_database#name DataAzurermDataShareDatasetKustoDatabase#name}.

---

##### `ShareId`<sup>Required</sup> <a name="ShareId" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseConfig.property.shareId"></a>

```csharp
public string ShareId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/data_share_dataset_kusto_database#share_id DataAzurermDataShareDatasetKustoDatabase#share_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/data_share_dataset_kusto_database#id DataAzurermDataShareDatasetKustoDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseConfig.property.timeouts"></a>

```csharp
public DataAzurermDataShareDatasetKustoDatabaseTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeouts">DataAzurermDataShareDatasetKustoDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/data_share_dataset_kusto_database#timeouts DataAzurermDataShareDatasetKustoDatabase#timeouts}

---

### DataAzurermDataShareDatasetKustoDatabaseTimeouts <a name="DataAzurermDataShareDatasetKustoDatabaseTimeouts" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermDataShareDatasetKustoDatabaseTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/data_share_dataset_kusto_database#read DataAzurermDataShareDatasetKustoDatabase#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/data_share_dataset_kusto_database#read DataAzurermDataShareDatasetKustoDatabase#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference <a name="DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeouts">DataAzurermDataShareDatasetKustoDatabaseTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAzurermDataShareDatasetKustoDatabaseTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetKustoDatabase.DataAzurermDataShareDatasetKustoDatabaseTimeouts">DataAzurermDataShareDatasetKustoDatabaseTimeouts</a>

---



