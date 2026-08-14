# `dataAzurermCosmosdbRestorableDatabaseAccounts` Submodule <a name="`dataAzurermCosmosdbRestorableDatabaseAccounts` Submodule" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermCosmosdbRestorableDatabaseAccounts <a name="DataAzurermCosmosdbRestorableDatabaseAccounts" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/cosmosdb_restorable_database_accounts azurerm_cosmosdb_restorable_database_accounts}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCosmosdbRestorableDatabaseAccounts(Construct Scope, string Id, DataAzurermCosmosdbRestorableDatabaseAccountsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig">DataAzurermCosmosdbRestorableDatabaseAccountsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig">DataAzurermCosmosdbRestorableDatabaseAccountsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts">DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermCosmosdbRestorableDatabaseAccounts resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermCosmosdbRestorableDatabaseAccounts.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermCosmosdbRestorableDatabaseAccounts.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermCosmosdbRestorableDatabaseAccounts.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermCosmosdbRestorableDatabaseAccounts.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAzurermCosmosdbRestorableDatabaseAccounts resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermCosmosdbRestorableDatabaseAccounts to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermCosmosdbRestorableDatabaseAccounts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/cosmosdb_restorable_database_accounts#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermCosmosdbRestorableDatabaseAccounts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.accounts">Accounts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList">DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference">DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts">DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.accounts"></a>

```csharp
public DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList Accounts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList">DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.timeouts"></a>

```csharp
public DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference">DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts">DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermCosmosdbRestorableDatabaseAccountsAccounts <a name="DataAzurermCosmosdbRestorableDatabaseAccountsAccounts" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccounts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCosmosdbRestorableDatabaseAccountsAccounts {

};
```


### DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations <a name="DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations {

};
```


### DataAzurermCosmosdbRestorableDatabaseAccountsConfig <a name="DataAzurermCosmosdbRestorableDatabaseAccountsConfig" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCosmosdbRestorableDatabaseAccountsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Name,
    string Id = null,
    DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/cosmosdb_restorable_database_accounts#location DataAzurermCosmosdbRestorableDatabaseAccounts#location}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/cosmosdb_restorable_database_accounts#name DataAzurermCosmosdbRestorableDatabaseAccounts#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/cosmosdb_restorable_database_accounts#id DataAzurermCosmosdbRestorableDatabaseAccounts#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts">DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/cosmosdb_restorable_database_accounts#location DataAzurermCosmosdbRestorableDatabaseAccounts#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/cosmosdb_restorable_database_accounts#name DataAzurermCosmosdbRestorableDatabaseAccounts#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/cosmosdb_restorable_database_accounts#id DataAzurermCosmosdbRestorableDatabaseAccounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.timeouts"></a>

```csharp
public DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts">DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/cosmosdb_restorable_database_accounts#timeouts DataAzurermCosmosdbRestorableDatabaseAccounts#timeouts}

---

### DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts <a name="DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/cosmosdb_restorable_database_accounts#read DataAzurermCosmosdbRestorableDatabaseAccounts#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/cosmosdb_restorable_database_accounts#read DataAzurermCosmosdbRestorableDatabaseAccounts#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList <a name="DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.get"></a>

```csharp
private DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference <a name="DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.apiType">ApiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.deletionTime">DeletionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.restorableLocations">RestorableLocations</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList">DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccounts">DataAzurermCosmosdbRestorableDatabaseAccountsAccounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiType`<sup>Required</sup> <a name="ApiType" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.apiType"></a>

```csharp
public string ApiType { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `DeletionTime`<sup>Required</sup> <a name="DeletionTime" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.deletionTime"></a>

```csharp
public string DeletionTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RestorableLocations`<sup>Required</sup> <a name="RestorableLocations" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.restorableLocations"></a>

```csharp
public DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList RestorableLocations { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList">DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.internalValue"></a>

```csharp
public DataAzurermCosmosdbRestorableDatabaseAccountsAccounts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccounts">DataAzurermCosmosdbRestorableDatabaseAccountsAccounts</a>

---


### DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList <a name="DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.get"></a>

```csharp
private DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference <a name="DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.deletionTime">DeletionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.regionalDatabaseAccountInstanceId">RegionalDatabaseAccountInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations">DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `DeletionTime`<sup>Required</sup> <a name="DeletionTime" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.deletionTime"></a>

```csharp
public string DeletionTime { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `RegionalDatabaseAccountInstanceId`<sup>Required</sup> <a name="RegionalDatabaseAccountInstanceId" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.regionalDatabaseAccountInstanceId"></a>

```csharp
public string RegionalDatabaseAccountInstanceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.internalValue"></a>

```csharp
public DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations">DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations</a>

---


### DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference <a name="DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts">DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts">DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts</a>

---



