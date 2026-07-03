# `dataAzurermOracleAutonomousDatabaseCloneFromBackup` Submodule <a name="`dataAzurermOracleAutonomousDatabaseCloneFromBackup` Submodule" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleAutonomousDatabaseCloneFromBackup <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackup" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/oracle_autonomous_database_clone_from_backup azurerm_oracle_autonomous_database_clone_from_backup}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermOracleAutonomousDatabaseCloneFromBackup(Construct Scope, string Id, DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig">DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig">DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermOracleAutonomousDatabaseCloneFromBackup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermOracleAutonomousDatabaseCloneFromBackup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermOracleAutonomousDatabaseCloneFromBackup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermOracleAutonomousDatabaseCloneFromBackup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermOracleAutonomousDatabaseCloneFromBackup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAzurermOracleAutonomousDatabaseCloneFromBackup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermOracleAutonomousDatabaseCloneFromBackup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermOracleAutonomousDatabaseCloneFromBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleAutonomousDatabaseCloneFromBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.actualUsedDataStorageSizeInTb">ActualUsedDataStorageSizeInTb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.allocatedStorageSizeInTb">AllocatedStorageSizeInTb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.allowedIpAddresses">AllowedIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.autoScalingEnabled">AutoScalingEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.autoScalingForStorageEnabled">AutoScalingForStorageEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.availableUpgradeVersions">AvailableUpgradeVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.backupRetentionPeriodInDays">BackupRetentionPeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.characterSet">CharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.computeCount">ComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.computeModel">ComputeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.connectionStrings">ConnectionStrings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.cpuCoreCount">CpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.customerContacts">CustomerContacts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.databaseVersion">DatabaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.databaseWorkload">DatabaseWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.dataStorageSizeInTb">DataStorageSizeInTb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.failedDataRecoveryInSeconds">FailedDataRecoveryInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.inMemoryAreaInGb">InMemoryAreaInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.lifecycleState">LifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.localAdgAutoFailoverMaxDataLossLimitInSeconds">LocalAdgAutoFailoverMaxDataLossLimitInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.localDataGuardEnabled">LocalDataGuardEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.longTermBackupSchedule">LongTermBackupSchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList">DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.memoryPerOracleComputeUnitInGb">MemoryPerOracleComputeUnitInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.mtlsConnectionRequired">MtlsConnectionRequired</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.nationalCharacterSet">NationalCharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.nextLongTermBackupTimestamp">NextLongTermBackupTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.ociUrl">OciUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.peerDatabaseIds">PeerDatabaseIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.preview">Preview</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.previewVersionWithServiceTermsAccepted">PreviewVersionWithServiceTermsAccepted</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.privateEndpointLabel">PrivateEndpointLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.privateEndpointUrl">PrivateEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.provisionableCpus">ProvisionableCpus</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.remoteDataGuardEnabled">RemoteDataGuardEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.serviceConsoleUrl">ServiceConsoleUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.sourceAutonomousDatabaseId">SourceAutonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.sqlWebDeveloperUrl">SqlWebDeveloperUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.supportedRegionsToCloneTo">SupportedRegionsToCloneTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeCreatedInUtc">TimeCreatedInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeDataGuardRoleChangedInUtc">TimeDataGuardRoleChangedInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeDeletionOfFreeAutonomousDatabaseInUtc">TimeDeletionOfFreeAutonomousDatabaseInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeLocalDataGuardEnabledInUtc">TimeLocalDataGuardEnabledInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeMaintenanceBeginInUtc">TimeMaintenanceBeginInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeMaintenanceEndInUtc">TimeMaintenanceEndInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastFailoverInUtc">TimeOfLastFailoverInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastRefreshInUtc">TimeOfLastRefreshInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastRefreshPointInUtc">TimeOfLastRefreshPointInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastSwitchoverInUtc">TimeOfLastSwitchoverInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeReclamationOfFreeAutonomousDatabaseInUtc">TimeReclamationOfFreeAutonomousDatabaseInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.usedDataStorageSizeInGb">UsedDataStorageSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.usedDataStorageSizeInTb">UsedDataStorageSizeInTb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ActualUsedDataStorageSizeInTb`<sup>Required</sup> <a name="ActualUsedDataStorageSizeInTb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.actualUsedDataStorageSizeInTb"></a>

```csharp
public double ActualUsedDataStorageSizeInTb { get; }
```

- *Type:* double

---

##### `AllocatedStorageSizeInTb`<sup>Required</sup> <a name="AllocatedStorageSizeInTb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.allocatedStorageSizeInTb"></a>

```csharp
public double AllocatedStorageSizeInTb { get; }
```

- *Type:* double

---

##### `AllowedIpAddresses`<sup>Required</sup> <a name="AllowedIpAddresses" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.allowedIpAddresses"></a>

```csharp
public string[] AllowedIpAddresses { get; }
```

- *Type:* string[]

---

##### `AutoScalingEnabled`<sup>Required</sup> <a name="AutoScalingEnabled" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.autoScalingEnabled"></a>

```csharp
public IResolvable AutoScalingEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AutoScalingForStorageEnabled`<sup>Required</sup> <a name="AutoScalingForStorageEnabled" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.autoScalingForStorageEnabled"></a>

```csharp
public IResolvable AutoScalingForStorageEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AvailableUpgradeVersions`<sup>Required</sup> <a name="AvailableUpgradeVersions" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.availableUpgradeVersions"></a>

```csharp
public string[] AvailableUpgradeVersions { get; }
```

- *Type:* string[]

---

##### `BackupRetentionPeriodInDays`<sup>Required</sup> <a name="BackupRetentionPeriodInDays" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.backupRetentionPeriodInDays"></a>

```csharp
public double BackupRetentionPeriodInDays { get; }
```

- *Type:* double

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.characterSet"></a>

```csharp
public string CharacterSet { get; }
```

- *Type:* string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.computeCount"></a>

```csharp
public double ComputeCount { get; }
```

- *Type:* double

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.computeModel"></a>

```csharp
public string ComputeModel { get; }
```

- *Type:* string

---

##### `ConnectionStrings`<sup>Required</sup> <a name="ConnectionStrings" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.connectionStrings"></a>

```csharp
public string[] ConnectionStrings { get; }
```

- *Type:* string[]

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.cpuCoreCount"></a>

```csharp
public double CpuCoreCount { get; }
```

- *Type:* double

---

##### `CustomerContacts`<sup>Required</sup> <a name="CustomerContacts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.customerContacts"></a>

```csharp
public string[] CustomerContacts { get; }
```

- *Type:* string[]

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.databaseVersion"></a>

```csharp
public string DatabaseVersion { get; }
```

- *Type:* string

---

##### `DatabaseWorkload`<sup>Required</sup> <a name="DatabaseWorkload" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.databaseWorkload"></a>

```csharp
public string DatabaseWorkload { get; }
```

- *Type:* string

---

##### `DataStorageSizeInGb`<sup>Required</sup> <a name="DataStorageSizeInGb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.dataStorageSizeInGb"></a>

```csharp
public double DataStorageSizeInGb { get; }
```

- *Type:* double

---

##### `DataStorageSizeInTb`<sup>Required</sup> <a name="DataStorageSizeInTb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.dataStorageSizeInTb"></a>

```csharp
public double DataStorageSizeInTb { get; }
```

- *Type:* double

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FailedDataRecoveryInSeconds`<sup>Required</sup> <a name="FailedDataRecoveryInSeconds" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.failedDataRecoveryInSeconds"></a>

```csharp
public double FailedDataRecoveryInSeconds { get; }
```

- *Type:* double

---

##### `InMemoryAreaInGb`<sup>Required</sup> <a name="InMemoryAreaInGb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.inMemoryAreaInGb"></a>

```csharp
public double InMemoryAreaInGb { get; }
```

- *Type:* double

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.lifecycleState"></a>

```csharp
public string LifecycleState { get; }
```

- *Type:* string

---

##### `LocalAdgAutoFailoverMaxDataLossLimitInSeconds`<sup>Required</sup> <a name="LocalAdgAutoFailoverMaxDataLossLimitInSeconds" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.localAdgAutoFailoverMaxDataLossLimitInSeconds"></a>

```csharp
public double LocalAdgAutoFailoverMaxDataLossLimitInSeconds { get; }
```

- *Type:* double

---

##### `LocalDataGuardEnabled`<sup>Required</sup> <a name="LocalDataGuardEnabled" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.localDataGuardEnabled"></a>

```csharp
public IResolvable LocalDataGuardEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `LongTermBackupSchedule`<sup>Required</sup> <a name="LongTermBackupSchedule" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.longTermBackupSchedule"></a>

```csharp
public DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList LongTermBackupSchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList">DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList</a>

---

##### `MemoryPerOracleComputeUnitInGb`<sup>Required</sup> <a name="MemoryPerOracleComputeUnitInGb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.memoryPerOracleComputeUnitInGb"></a>

```csharp
public double MemoryPerOracleComputeUnitInGb { get; }
```

- *Type:* double

---

##### `MtlsConnectionRequired`<sup>Required</sup> <a name="MtlsConnectionRequired" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.mtlsConnectionRequired"></a>

```csharp
public IResolvable MtlsConnectionRequired { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `NationalCharacterSet`<sup>Required</sup> <a name="NationalCharacterSet" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.nationalCharacterSet"></a>

```csharp
public string NationalCharacterSet { get; }
```

- *Type:* string

---

##### `NextLongTermBackupTimestamp`<sup>Required</sup> <a name="NextLongTermBackupTimestamp" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.nextLongTermBackupTimestamp"></a>

```csharp
public string NextLongTermBackupTimestamp { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.ociUrl"></a>

```csharp
public string OciUrl { get; }
```

- *Type:* string

---

##### `PeerDatabaseIds`<sup>Required</sup> <a name="PeerDatabaseIds" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.peerDatabaseIds"></a>

```csharp
public string[] PeerDatabaseIds { get; }
```

- *Type:* string[]

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.preview"></a>

```csharp
public IResolvable Preview { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `PreviewVersionWithServiceTermsAccepted`<sup>Required</sup> <a name="PreviewVersionWithServiceTermsAccepted" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.previewVersionWithServiceTermsAccepted"></a>

```csharp
public IResolvable PreviewVersionWithServiceTermsAccepted { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `PrivateEndpointIp`<sup>Required</sup> <a name="PrivateEndpointIp" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.privateEndpointIp"></a>

```csharp
public string PrivateEndpointIp { get; }
```

- *Type:* string

---

##### `PrivateEndpointLabel`<sup>Required</sup> <a name="PrivateEndpointLabel" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.privateEndpointLabel"></a>

```csharp
public string PrivateEndpointLabel { get; }
```

- *Type:* string

---

##### `PrivateEndpointUrl`<sup>Required</sup> <a name="PrivateEndpointUrl" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.privateEndpointUrl"></a>

```csharp
public string PrivateEndpointUrl { get; }
```

- *Type:* string

---

##### `ProvisionableCpus`<sup>Required</sup> <a name="ProvisionableCpus" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.provisionableCpus"></a>

```csharp
public double[] ProvisionableCpus { get; }
```

- *Type:* double[]

---

##### `RemoteDataGuardEnabled`<sup>Required</sup> <a name="RemoteDataGuardEnabled" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.remoteDataGuardEnabled"></a>

```csharp
public IResolvable RemoteDataGuardEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ServiceConsoleUrl`<sup>Required</sup> <a name="ServiceConsoleUrl" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.serviceConsoleUrl"></a>

```csharp
public string ServiceConsoleUrl { get; }
```

- *Type:* string

---

##### `SourceAutonomousDatabaseId`<sup>Required</sup> <a name="SourceAutonomousDatabaseId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.sourceAutonomousDatabaseId"></a>

```csharp
public string SourceAutonomousDatabaseId { get; }
```

- *Type:* string

---

##### `SqlWebDeveloperUrl`<sup>Required</sup> <a name="SqlWebDeveloperUrl" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.sqlWebDeveloperUrl"></a>

```csharp
public string SqlWebDeveloperUrl { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `SupportedRegionsToCloneTo`<sup>Required</sup> <a name="SupportedRegionsToCloneTo" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.supportedRegionsToCloneTo"></a>

```csharp
public string[] SupportedRegionsToCloneTo { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `TimeCreatedInUtc`<sup>Required</sup> <a name="TimeCreatedInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeCreatedInUtc"></a>

```csharp
public string TimeCreatedInUtc { get; }
```

- *Type:* string

---

##### `TimeDataGuardRoleChangedInUtc`<sup>Required</sup> <a name="TimeDataGuardRoleChangedInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeDataGuardRoleChangedInUtc"></a>

```csharp
public string TimeDataGuardRoleChangedInUtc { get; }
```

- *Type:* string

---

##### `TimeDeletionOfFreeAutonomousDatabaseInUtc`<sup>Required</sup> <a name="TimeDeletionOfFreeAutonomousDatabaseInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeDeletionOfFreeAutonomousDatabaseInUtc"></a>

```csharp
public string TimeDeletionOfFreeAutonomousDatabaseInUtc { get; }
```

- *Type:* string

---

##### `TimeLocalDataGuardEnabledInUtc`<sup>Required</sup> <a name="TimeLocalDataGuardEnabledInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeLocalDataGuardEnabledInUtc"></a>

```csharp
public string TimeLocalDataGuardEnabledInUtc { get; }
```

- *Type:* string

---

##### `TimeMaintenanceBeginInUtc`<sup>Required</sup> <a name="TimeMaintenanceBeginInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeMaintenanceBeginInUtc"></a>

```csharp
public string TimeMaintenanceBeginInUtc { get; }
```

- *Type:* string

---

##### `TimeMaintenanceEndInUtc`<sup>Required</sup> <a name="TimeMaintenanceEndInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeMaintenanceEndInUtc"></a>

```csharp
public string TimeMaintenanceEndInUtc { get; }
```

- *Type:* string

---

##### `TimeOfLastFailoverInUtc`<sup>Required</sup> <a name="TimeOfLastFailoverInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastFailoverInUtc"></a>

```csharp
public string TimeOfLastFailoverInUtc { get; }
```

- *Type:* string

---

##### `TimeOfLastRefreshInUtc`<sup>Required</sup> <a name="TimeOfLastRefreshInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastRefreshInUtc"></a>

```csharp
public string TimeOfLastRefreshInUtc { get; }
```

- *Type:* string

---

##### `TimeOfLastRefreshPointInUtc`<sup>Required</sup> <a name="TimeOfLastRefreshPointInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastRefreshPointInUtc"></a>

```csharp
public string TimeOfLastRefreshPointInUtc { get; }
```

- *Type:* string

---

##### `TimeOfLastSwitchoverInUtc`<sup>Required</sup> <a name="TimeOfLastSwitchoverInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastSwitchoverInUtc"></a>

```csharp
public string TimeOfLastSwitchoverInUtc { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeouts"></a>

```csharp
public DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference</a>

---

##### `TimeReclamationOfFreeAutonomousDatabaseInUtc`<sup>Required</sup> <a name="TimeReclamationOfFreeAutonomousDatabaseInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeReclamationOfFreeAutonomousDatabaseInUtc"></a>

```csharp
public string TimeReclamationOfFreeAutonomousDatabaseInUtc { get; }
```

- *Type:* string

---

##### `UsedDataStorageSizeInGb`<sup>Required</sup> <a name="UsedDataStorageSizeInGb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.usedDataStorageSizeInGb"></a>

```csharp
public double UsedDataStorageSizeInGb { get; }
```

- *Type:* double

---

##### `UsedDataStorageSizeInTb`<sup>Required</sup> <a name="UsedDataStorageSizeInTb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.usedDataStorageSizeInTb"></a>

```csharp
public double UsedDataStorageSizeInTb { get; }
```

- *Type:* double

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string ResourceGroupName,
    string Id = null,
    DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#name DataAzurermOracleAutonomousDatabaseCloneFromBackup#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#resource_group_name DataAzurermOracleAutonomousDatabaseCloneFromBackup#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#id DataAzurermOracleAutonomousDatabaseCloneFromBackup#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#name DataAzurermOracleAutonomousDatabaseCloneFromBackup#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#resource_group_name DataAzurermOracleAutonomousDatabaseCloneFromBackup#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#id DataAzurermOracleAutonomousDatabaseCloneFromBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.timeouts"></a>

```csharp
public DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#timeouts DataAzurermOracleAutonomousDatabaseCloneFromBackup#timeouts}

---

### DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule {

};
```


### DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#read DataAzurermOracleAutonomousDatabaseCloneFromBackup#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#read DataAzurermOracleAutonomousDatabaseCloneFromBackup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.get"></a>

```csharp
private DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.repeatCadence">RepeatCadence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.timeOfBackupInUtc">TimeOfBackupInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule">DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RepeatCadence`<sup>Required</sup> <a name="RepeatCadence" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.repeatCadence"></a>

```csharp
public string RepeatCadence { get; }
```

- *Type:* string

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```csharp
public double RetentionPeriodInDays { get; }
```

- *Type:* double

---

##### `TimeOfBackupInUtc`<sup>Required</sup> <a name="TimeOfBackupInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.timeOfBackupInUtc"></a>

```csharp
public string TimeOfBackupInUtc { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule">DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule</a>

---


### DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts</a>

---



