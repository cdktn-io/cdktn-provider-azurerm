# `dataAzurermCognitiveAccount` Submodule <a name="`dataAzurermCognitiveAccount` Submodule" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermCognitiveAccount <a name="DataAzurermCognitiveAccount" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/cognitive_account azurerm_cognitive_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCognitiveAccount(Construct Scope, string Id, DataAzurermCognitiveAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig">DataAzurermCognitiveAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig">DataAzurermCognitiveAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermCognitiveAccountTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts">DataAzurermCognitiveAccountTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermCognitiveAccount resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermCognitiveAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermCognitiveAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermCognitiveAccount.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermCognitiveAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAzurermCognitiveAccount resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermCognitiveAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermCognitiveAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/cognitive_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermCognitiveAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.customerManagedKey">CustomerManagedKey</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList">DataAzurermCognitiveAccountCustomerManagedKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.customQuestionAnsweringSearchServiceId">CustomQuestionAnsweringSearchServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.customSubdomainName">CustomSubdomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.dynamicThrottlingEnabled">DynamicThrottlingEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.fqdns">Fqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList">DataAzurermCognitiveAccountIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.metricsAdvisorAadClientId">MetricsAdvisorAadClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.metricsAdvisorAadTenantId">MetricsAdvisorAadTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.metricsAdvisorSuperUserName">MetricsAdvisorSuperUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.metricsAdvisorWebsiteName">MetricsAdvisorWebsiteName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.networkAcls">NetworkAcls</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList">DataAzurermCognitiveAccountNetworkAclsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.networkInjection">NetworkInjection</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList">DataAzurermCognitiveAccountNetworkInjectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.outboundNetworkAccessRestricted">OutboundNetworkAccessRestricted</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.primaryAccessKey">PrimaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.projectManagementEnabled">ProjectManagementEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.qnaRuntimeEndpoint">QnaRuntimeEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.secondaryAccessKey">SecondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.skuName">SkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.storage">Storage</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList">DataAzurermCognitiveAccountStorageList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference">DataAzurermCognitiveAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts">DataAzurermCognitiveAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CustomerManagedKey`<sup>Required</sup> <a name="CustomerManagedKey" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.customerManagedKey"></a>

```csharp
public DataAzurermCognitiveAccountCustomerManagedKeyList CustomerManagedKey { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList">DataAzurermCognitiveAccountCustomerManagedKeyList</a>

---

##### `CustomQuestionAnsweringSearchServiceId`<sup>Required</sup> <a name="CustomQuestionAnsweringSearchServiceId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.customQuestionAnsweringSearchServiceId"></a>

```csharp
public string CustomQuestionAnsweringSearchServiceId { get; }
```

- *Type:* string

---

##### `CustomSubdomainName`<sup>Required</sup> <a name="CustomSubdomainName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.customSubdomainName"></a>

```csharp
public string CustomSubdomainName { get; }
```

- *Type:* string

---

##### `DynamicThrottlingEnabled`<sup>Required</sup> <a name="DynamicThrottlingEnabled" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.dynamicThrottlingEnabled"></a>

```csharp
public IResolvable DynamicThrottlingEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Fqdns`<sup>Required</sup> <a name="Fqdns" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.fqdns"></a>

```csharp
public string[] Fqdns { get; }
```

- *Type:* string[]

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.identity"></a>

```csharp
public DataAzurermCognitiveAccountIdentityList Identity { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList">DataAzurermCognitiveAccountIdentityList</a>

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `LocalAuthEnabled`<sup>Required</sup> <a name="LocalAuthEnabled" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.localAuthEnabled"></a>

```csharp
public IResolvable LocalAuthEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MetricsAdvisorAadClientId`<sup>Required</sup> <a name="MetricsAdvisorAadClientId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.metricsAdvisorAadClientId"></a>

```csharp
public string MetricsAdvisorAadClientId { get; }
```

- *Type:* string

---

##### `MetricsAdvisorAadTenantId`<sup>Required</sup> <a name="MetricsAdvisorAadTenantId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.metricsAdvisorAadTenantId"></a>

```csharp
public string MetricsAdvisorAadTenantId { get; }
```

- *Type:* string

---

##### `MetricsAdvisorSuperUserName`<sup>Required</sup> <a name="MetricsAdvisorSuperUserName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.metricsAdvisorSuperUserName"></a>

```csharp
public string MetricsAdvisorSuperUserName { get; }
```

- *Type:* string

---

##### `MetricsAdvisorWebsiteName`<sup>Required</sup> <a name="MetricsAdvisorWebsiteName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.metricsAdvisorWebsiteName"></a>

```csharp
public string MetricsAdvisorWebsiteName { get; }
```

- *Type:* string

---

##### `NetworkAcls`<sup>Required</sup> <a name="NetworkAcls" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.networkAcls"></a>

```csharp
public DataAzurermCognitiveAccountNetworkAclsList NetworkAcls { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList">DataAzurermCognitiveAccountNetworkAclsList</a>

---

##### `NetworkInjection`<sup>Required</sup> <a name="NetworkInjection" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.networkInjection"></a>

```csharp
public DataAzurermCognitiveAccountNetworkInjectionList NetworkInjection { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList">DataAzurermCognitiveAccountNetworkInjectionList</a>

---

##### `OutboundNetworkAccessRestricted`<sup>Required</sup> <a name="OutboundNetworkAccessRestricted" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.outboundNetworkAccessRestricted"></a>

```csharp
public IResolvable OutboundNetworkAccessRestricted { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `PrimaryAccessKey`<sup>Required</sup> <a name="PrimaryAccessKey" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.primaryAccessKey"></a>

```csharp
public string PrimaryAccessKey { get; }
```

- *Type:* string

---

##### `ProjectManagementEnabled`<sup>Required</sup> <a name="ProjectManagementEnabled" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.projectManagementEnabled"></a>

```csharp
public IResolvable ProjectManagementEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.publicNetworkAccessEnabled"></a>

```csharp
public IResolvable PublicNetworkAccessEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `QnaRuntimeEndpoint`<sup>Required</sup> <a name="QnaRuntimeEndpoint" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.qnaRuntimeEndpoint"></a>

```csharp
public string QnaRuntimeEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryAccessKey`<sup>Required</sup> <a name="SecondaryAccessKey" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.secondaryAccessKey"></a>

```csharp
public string SecondaryAccessKey { get; }
```

- *Type:* string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.skuName"></a>

```csharp
public string SkuName { get; }
```

- *Type:* string

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.storage"></a>

```csharp
public DataAzurermCognitiveAccountStorageList Storage { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList">DataAzurermCognitiveAccountStorageList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.timeouts"></a>

```csharp
public DataAzurermCognitiveAccountTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference">DataAzurermCognitiveAccountTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAzurermCognitiveAccountTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts">DataAzurermCognitiveAccountTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermCognitiveAccountConfig <a name="DataAzurermCognitiveAccountConfig" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCognitiveAccountConfig {
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
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    DataAzurermCognitiveAccountTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/cognitive_account#name DataAzurermCognitiveAccount#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/cognitive_account#resource_group_name DataAzurermCognitiveAccount#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/cognitive_account#id DataAzurermCognitiveAccount#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/cognitive_account#tags DataAzurermCognitiveAccount#tags}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts">DataAzurermCognitiveAccountTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/cognitive_account#name DataAzurermCognitiveAccount#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/cognitive_account#resource_group_name DataAzurermCognitiveAccount#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/cognitive_account#id DataAzurermCognitiveAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/cognitive_account#tags DataAzurermCognitiveAccount#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.timeouts"></a>

```csharp
public DataAzurermCognitiveAccountTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts">DataAzurermCognitiveAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/cognitive_account#timeouts DataAzurermCognitiveAccount#timeouts}

---

### DataAzurermCognitiveAccountCustomerManagedKey <a name="DataAzurermCognitiveAccountCustomerManagedKey" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCognitiveAccountCustomerManagedKey {

};
```


### DataAzurermCognitiveAccountIdentity <a name="DataAzurermCognitiveAccountIdentity" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCognitiveAccountIdentity {

};
```


### DataAzurermCognitiveAccountNetworkAcls <a name="DataAzurermCognitiveAccountNetworkAcls" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAcls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAcls.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCognitiveAccountNetworkAcls {

};
```


### DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules <a name="DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules {

};
```


### DataAzurermCognitiveAccountNetworkInjection <a name="DataAzurermCognitiveAccountNetworkInjection" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCognitiveAccountNetworkInjection {

};
```


### DataAzurermCognitiveAccountStorage <a name="DataAzurermCognitiveAccountStorage" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCognitiveAccountStorage {

};
```


### DataAzurermCognitiveAccountTimeouts <a name="DataAzurermCognitiveAccountTimeouts" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCognitiveAccountTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/cognitive_account#read DataAzurermCognitiveAccount#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/cognitive_account#read DataAzurermCognitiveAccount#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermCognitiveAccountCustomerManagedKeyList <a name="DataAzurermCognitiveAccountCustomerManagedKeyList" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCognitiveAccountCustomerManagedKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.get"></a>

```csharp
private DataAzurermCognitiveAccountCustomerManagedKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermCognitiveAccountCustomerManagedKeyOutputReference <a name="DataAzurermCognitiveAccountCustomerManagedKeyOutputReference" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCognitiveAccountCustomerManagedKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.identityClientId">IdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKey">DataAzurermCognitiveAccountCustomerManagedKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityClientId`<sup>Required</sup> <a name="IdentityClientId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.identityClientId"></a>

```csharp
public string IdentityClientId { get; }
```

- *Type:* string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.internalValue"></a>

```csharp
public DataAzurermCognitiveAccountCustomerManagedKey InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKey">DataAzurermCognitiveAccountCustomerManagedKey</a>

---


### DataAzurermCognitiveAccountIdentityList <a name="DataAzurermCognitiveAccountIdentityList" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCognitiveAccountIdentityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.get"></a>

```csharp
private DataAzurermCognitiveAccountIdentityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermCognitiveAccountIdentityOutputReference <a name="DataAzurermCognitiveAccountIdentityOutputReference" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCognitiveAccountIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentity">DataAzurermCognitiveAccountIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.internalValue"></a>

```csharp
public DataAzurermCognitiveAccountIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentity">DataAzurermCognitiveAccountIdentity</a>

---


### DataAzurermCognitiveAccountNetworkAclsList <a name="DataAzurermCognitiveAccountNetworkAclsList" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCognitiveAccountNetworkAclsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.get"></a>

```csharp
private DataAzurermCognitiveAccountNetworkAclsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermCognitiveAccountNetworkAclsOutputReference <a name="DataAzurermCognitiveAccountNetworkAclsOutputReference" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCognitiveAccountNetworkAclsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.bypass">Bypass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.defaultAction">DefaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.ipRules">IpRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.virtualNetworkRules">VirtualNetworkRules</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList">DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAcls">DataAzurermCognitiveAccountNetworkAcls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bypass`<sup>Required</sup> <a name="Bypass" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.bypass"></a>

```csharp
public string Bypass { get; }
```

- *Type:* string

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.defaultAction"></a>

```csharp
public string DefaultAction { get; }
```

- *Type:* string

---

##### `IpRules`<sup>Required</sup> <a name="IpRules" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.ipRules"></a>

```csharp
public string[] IpRules { get; }
```

- *Type:* string[]

---

##### `VirtualNetworkRules`<sup>Required</sup> <a name="VirtualNetworkRules" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.virtualNetworkRules"></a>

```csharp
public DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList VirtualNetworkRules { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList">DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.internalValue"></a>

```csharp
public DataAzurermCognitiveAccountNetworkAcls InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAcls">DataAzurermCognitiveAccountNetworkAcls</a>

---


### DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList <a name="DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.get"></a>

```csharp
private DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference <a name="DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpoint">IgnoreMissingVnetServiceEndpoint</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules">DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IgnoreMissingVnetServiceEndpoint`<sup>Required</sup> <a name="IgnoreMissingVnetServiceEndpoint" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpoint"></a>

```csharp
public IResolvable IgnoreMissingVnetServiceEndpoint { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.internalValue"></a>

```csharp
public DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules">DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules</a>

---


### DataAzurermCognitiveAccountNetworkInjectionList <a name="DataAzurermCognitiveAccountNetworkInjectionList" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCognitiveAccountNetworkInjectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.get"></a>

```csharp
private DataAzurermCognitiveAccountNetworkInjectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermCognitiveAccountNetworkInjectionOutputReference <a name="DataAzurermCognitiveAccountNetworkInjectionOutputReference" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCognitiveAccountNetworkInjectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.scenario">Scenario</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjection">DataAzurermCognitiveAccountNetworkInjection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Scenario`<sup>Required</sup> <a name="Scenario" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.scenario"></a>

```csharp
public string Scenario { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.internalValue"></a>

```csharp
public DataAzurermCognitiveAccountNetworkInjection InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjection">DataAzurermCognitiveAccountNetworkInjection</a>

---


### DataAzurermCognitiveAccountStorageList <a name="DataAzurermCognitiveAccountStorageList" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCognitiveAccountStorageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.get"></a>

```csharp
private DataAzurermCognitiveAccountStorageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermCognitiveAccountStorageOutputReference <a name="DataAzurermCognitiveAccountStorageOutputReference" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCognitiveAccountStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.identityClientId">IdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorage">DataAzurermCognitiveAccountStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityClientId`<sup>Required</sup> <a name="IdentityClientId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.identityClientId"></a>

```csharp
public string IdentityClientId { get; }
```

- *Type:* string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.internalValue"></a>

```csharp
public DataAzurermCognitiveAccountStorage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorage">DataAzurermCognitiveAccountStorage</a>

---


### DataAzurermCognitiveAccountTimeoutsOutputReference <a name="DataAzurermCognitiveAccountTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermCognitiveAccountTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts">DataAzurermCognitiveAccountTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAzurermCognitiveAccountTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts">DataAzurermCognitiveAccountTimeouts</a>

---



