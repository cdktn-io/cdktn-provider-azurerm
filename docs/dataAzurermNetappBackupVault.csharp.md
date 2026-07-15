# `dataAzurermNetappBackupVault` Submodule <a name="`dataAzurermNetappBackupVault` Submodule" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNetappBackupVault <a name="DataAzurermNetappBackupVault" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_backup_vault azurerm_netapp_backup_vault}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermNetappBackupVault(Construct Scope, string Id, DataAzurermNetappBackupVaultConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig">DataAzurermNetappBackupVaultConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig">DataAzurermNetappBackupVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermNetappBackupVaultTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeouts">DataAzurermNetappBackupVaultTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermNetappBackupVault resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermNetappBackupVault.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermNetappBackupVault.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermNetappBackupVault.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermNetappBackupVault.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAzurermNetappBackupVault resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermNetappBackupVault to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermNetappBackupVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_backup_vault#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermNetappBackupVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference">DataAzurermNetappBackupVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.accountNameInput">AccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeouts">DataAzurermNetappBackupVaultTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.accountName">AccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.timeouts"></a>

```csharp
public DataAzurermNetappBackupVaultTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference">DataAzurermNetappBackupVaultTimeoutsOutputReference</a>

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.accountNameInput"></a>

```csharp
public string AccountNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAzurermNetappBackupVaultTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeouts">DataAzurermNetappBackupVaultTimeouts</a>

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.accountName"></a>

```csharp
public string AccountName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNetappBackupVaultConfig <a name="DataAzurermNetappBackupVaultConfig" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermNetappBackupVaultConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountName,
    string Name,
    string ResourceGroupName,
    string Id = null,
    DataAzurermNetappBackupVaultTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.accountName">AccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_backup_vault#account_name DataAzurermNetappBackupVault#account_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_backup_vault#name DataAzurermNetappBackupVault#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_backup_vault#resource_group_name DataAzurermNetappBackupVault#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_backup_vault#id DataAzurermNetappBackupVault#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeouts">DataAzurermNetappBackupVaultTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.accountName"></a>

```csharp
public string AccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_backup_vault#account_name DataAzurermNetappBackupVault#account_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_backup_vault#name DataAzurermNetappBackupVault#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_backup_vault#resource_group_name DataAzurermNetappBackupVault#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_backup_vault#id DataAzurermNetappBackupVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.timeouts"></a>

```csharp
public DataAzurermNetappBackupVaultTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeouts">DataAzurermNetappBackupVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_backup_vault#timeouts DataAzurermNetappBackupVault#timeouts}

---

### DataAzurermNetappBackupVaultTimeouts <a name="DataAzurermNetappBackupVaultTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermNetappBackupVaultTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_backup_vault#read DataAzurermNetappBackupVault#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/netapp_backup_vault#read DataAzurermNetappBackupVault#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNetappBackupVaultTimeoutsOutputReference <a name="DataAzurermNetappBackupVaultTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermNetappBackupVaultTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeouts">DataAzurermNetappBackupVaultTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAzurermNetappBackupVaultTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeouts">DataAzurermNetappBackupVaultTimeouts</a>

---



