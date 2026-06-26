# `dataAzurermDataShareDatasetDataLakeGen2` Submodule <a name="`dataAzurermDataShareDatasetDataLakeGen2` Submodule" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermDataShareDatasetDataLakeGen2 <a name="DataAzurermDataShareDatasetDataLakeGen2" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/data_share_dataset_data_lake_gen2 azurerm_data_share_dataset_data_lake_gen2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermDataShareDatasetDataLakeGen2(Construct Scope, string Id, DataAzurermDataShareDatasetDataLakeGen2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config">DataAzurermDataShareDatasetDataLakeGen2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config">DataAzurermDataShareDatasetDataLakeGen2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermDataShareDatasetDataLakeGen2Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Timeouts">DataAzurermDataShareDatasetDataLakeGen2Timeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermDataShareDatasetDataLakeGen2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermDataShareDatasetDataLakeGen2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermDataShareDatasetDataLakeGen2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermDataShareDatasetDataLakeGen2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermDataShareDatasetDataLakeGen2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAzurermDataShareDatasetDataLakeGen2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermDataShareDatasetDataLakeGen2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermDataShareDatasetDataLakeGen2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/data_share_dataset_data_lake_gen2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermDataShareDatasetDataLakeGen2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.filePath">FilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.fileSystemName">FileSystemName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.folderPath">FolderPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference">DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.shareIdInput">ShareIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Timeouts">DataAzurermDataShareDatasetDataLakeGen2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.shareId">ShareId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.filePath"></a>

```csharp
public string FilePath { get; }
```

- *Type:* string

---

##### `FileSystemName`<sup>Required</sup> <a name="FileSystemName" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.fileSystemName"></a>

```csharp
public string FileSystemName { get; }
```

- *Type:* string

---

##### `FolderPath`<sup>Required</sup> <a name="FolderPath" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.folderPath"></a>

```csharp
public string FolderPath { get; }
```

- *Type:* string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.timeouts"></a>

```csharp
public DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference">DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ShareIdInput`<sup>Optional</sup> <a name="ShareIdInput" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.shareIdInput"></a>

```csharp
public string ShareIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAzurermDataShareDatasetDataLakeGen2Timeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Timeouts">DataAzurermDataShareDatasetDataLakeGen2Timeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ShareId`<sup>Required</sup> <a name="ShareId" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.shareId"></a>

```csharp
public string ShareId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermDataShareDatasetDataLakeGen2Config <a name="DataAzurermDataShareDatasetDataLakeGen2Config" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermDataShareDatasetDataLakeGen2Config {
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
    DataAzurermDataShareDatasetDataLakeGen2Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/data_share_dataset_data_lake_gen2#name DataAzurermDataShareDatasetDataLakeGen2#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.shareId">ShareId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/data_share_dataset_data_lake_gen2#share_id DataAzurermDataShareDatasetDataLakeGen2#share_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/data_share_dataset_data_lake_gen2#id DataAzurermDataShareDatasetDataLakeGen2#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Timeouts">DataAzurermDataShareDatasetDataLakeGen2Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/data_share_dataset_data_lake_gen2#name DataAzurermDataShareDatasetDataLakeGen2#name}.

---

##### `ShareId`<sup>Required</sup> <a name="ShareId" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.shareId"></a>

```csharp
public string ShareId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/data_share_dataset_data_lake_gen2#share_id DataAzurermDataShareDatasetDataLakeGen2#share_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/data_share_dataset_data_lake_gen2#id DataAzurermDataShareDatasetDataLakeGen2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Config.property.timeouts"></a>

```csharp
public DataAzurermDataShareDatasetDataLakeGen2Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Timeouts">DataAzurermDataShareDatasetDataLakeGen2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/data_share_dataset_data_lake_gen2#timeouts DataAzurermDataShareDatasetDataLakeGen2#timeouts}

---

### DataAzurermDataShareDatasetDataLakeGen2Timeouts <a name="DataAzurermDataShareDatasetDataLakeGen2Timeouts" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Timeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermDataShareDatasetDataLakeGen2Timeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Timeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/data_share_dataset_data_lake_gen2#read DataAzurermDataShareDatasetDataLakeGen2#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Timeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/data_share_dataset_data_lake_gen2#read DataAzurermDataShareDatasetDataLakeGen2#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference <a name="DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Timeouts">DataAzurermDataShareDatasetDataLakeGen2Timeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2TimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAzurermDataShareDatasetDataLakeGen2Timeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermDataShareDatasetDataLakeGen2.DataAzurermDataShareDatasetDataLakeGen2Timeouts">DataAzurermDataShareDatasetDataLakeGen2Timeouts</a>

---



