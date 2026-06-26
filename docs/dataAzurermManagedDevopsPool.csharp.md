# `dataAzurermManagedDevopsPool` Submodule <a name="`dataAzurermManagedDevopsPool` Submodule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermManagedDevopsPool <a name="DataAzurermManagedDevopsPool" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/managed_devops_pool azurerm_managed_devops_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPool(Construct Scope, string Id, DataAzurermManagedDevopsPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig">DataAzurermManagedDevopsPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig">DataAzurermManagedDevopsPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermManagedDevopsPoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeouts">DataAzurermManagedDevopsPoolTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermManagedDevopsPool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermManagedDevopsPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermManagedDevopsPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermManagedDevopsPool.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermManagedDevopsPool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAzurermManagedDevopsPool resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermManagedDevopsPool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermManagedDevopsPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/managed_devops_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermManagedDevopsPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.azureDevopsOrganization">AzureDevopsOrganization</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList">DataAzurermManagedDevopsPoolAzureDevopsOrganizationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.devCenterProjectId">DevCenterProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList">DataAzurermManagedDevopsPoolIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.maximumConcurrency">MaximumConcurrency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.statefulAgent">StatefulAgent</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList">DataAzurermManagedDevopsPoolStatefulAgentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.statelessAgent">StatelessAgent</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList">DataAzurermManagedDevopsPoolStatelessAgentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference">DataAzurermManagedDevopsPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.virtualMachineScaleSetFabric">VirtualMachineScaleSetFabric</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.workFolder">WorkFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeouts">DataAzurermManagedDevopsPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AzureDevopsOrganization`<sup>Required</sup> <a name="AzureDevopsOrganization" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.azureDevopsOrganization"></a>

```csharp
public DataAzurermManagedDevopsPoolAzureDevopsOrganizationList AzureDevopsOrganization { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList">DataAzurermManagedDevopsPoolAzureDevopsOrganizationList</a>

---

##### `DevCenterProjectId`<sup>Required</sup> <a name="DevCenterProjectId" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.devCenterProjectId"></a>

```csharp
public string DevCenterProjectId { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.identity"></a>

```csharp
public DataAzurermManagedDevopsPoolIdentityList Identity { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList">DataAzurermManagedDevopsPoolIdentityList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MaximumConcurrency`<sup>Required</sup> <a name="MaximumConcurrency" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.maximumConcurrency"></a>

```csharp
public double MaximumConcurrency { get; }
```

- *Type:* double

---

##### `StatefulAgent`<sup>Required</sup> <a name="StatefulAgent" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.statefulAgent"></a>

```csharp
public DataAzurermManagedDevopsPoolStatefulAgentList StatefulAgent { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList">DataAzurermManagedDevopsPoolStatefulAgentList</a>

---

##### `StatelessAgent`<sup>Required</sup> <a name="StatelessAgent" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.statelessAgent"></a>

```csharp
public DataAzurermManagedDevopsPoolStatelessAgentList StatelessAgent { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList">DataAzurermManagedDevopsPoolStatelessAgentList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.timeouts"></a>

```csharp
public DataAzurermManagedDevopsPoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference">DataAzurermManagedDevopsPoolTimeoutsOutputReference</a>

---

##### `VirtualMachineScaleSetFabric`<sup>Required</sup> <a name="VirtualMachineScaleSetFabric" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.virtualMachineScaleSetFabric"></a>

```csharp
public DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList VirtualMachineScaleSetFabric { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList</a>

---

##### `WorkFolder`<sup>Required</sup> <a name="WorkFolder" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.workFolder"></a>

```csharp
public string WorkFolder { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAzurermManagedDevopsPoolTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeouts">DataAzurermManagedDevopsPoolTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermManagedDevopsPoolAzureDevopsOrganization <a name="DataAzurermManagedDevopsPoolAzureDevopsOrganization" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolAzureDevopsOrganization {

};
```


### DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganization <a name="DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganization" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganization {

};
```


### DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermission <a name="DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermission" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermission"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermission.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermission {

};
```


### DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount <a name="DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount {

};
```


### DataAzurermManagedDevopsPoolConfig <a name="DataAzurermManagedDevopsPoolConfig" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolConfig {
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
    DataAzurermManagedDevopsPoolTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/managed_devops_pool#name DataAzurermManagedDevopsPool#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/managed_devops_pool#resource_group_name DataAzurermManagedDevopsPool#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/managed_devops_pool#id DataAzurermManagedDevopsPool#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeouts">DataAzurermManagedDevopsPoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/managed_devops_pool#name DataAzurermManagedDevopsPool#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/managed_devops_pool#resource_group_name DataAzurermManagedDevopsPool#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/managed_devops_pool#id DataAzurermManagedDevopsPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolConfig.property.timeouts"></a>

```csharp
public DataAzurermManagedDevopsPoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeouts">DataAzurermManagedDevopsPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/managed_devops_pool#timeouts DataAzurermManagedDevopsPool#timeouts}

---

### DataAzurermManagedDevopsPoolIdentity <a name="DataAzurermManagedDevopsPoolIdentity" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolIdentity {

};
```


### DataAzurermManagedDevopsPoolStatefulAgent <a name="DataAzurermManagedDevopsPoolStatefulAgent" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgent {

};
```


### DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePrediction <a name="DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePrediction" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePrediction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePrediction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePrediction {

};
```


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePrediction <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePrediction" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePrediction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePrediction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePrediction {

};
```


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule {

};
```


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule {

};
```


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule {

};
```


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule {

};
```


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule {

};
```


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule {

};
```


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule {

};
```


### DataAzurermManagedDevopsPoolStatelessAgent <a name="DataAzurermManagedDevopsPoolStatelessAgent" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgent {

};
```


### DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePrediction <a name="DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePrediction" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePrediction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePrediction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePrediction {

};
```


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePrediction <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePrediction" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePrediction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePrediction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePrediction {

};
```


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule {

};
```


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule {

};
```


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule {

};
```


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule {

};
```


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule {

};
```


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule {

};
```


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule {

};
```


### DataAzurermManagedDevopsPoolTimeouts <a name="DataAzurermManagedDevopsPoolTimeouts" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/managed_devops_pool#read DataAzurermManagedDevopsPool#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/managed_devops_pool#read DataAzurermManagedDevopsPool#read}.

---

### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabric <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabric" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabric.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabric {

};
```


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImage <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImage" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImage {

};
```


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurity <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurity" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurity {

};
```


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement {

};
```


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorage <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorage" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorage {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermManagedDevopsPoolAzureDevopsOrganizationList <a name="DataAzurermManagedDevopsPoolAzureDevopsOrganizationList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolAzureDevopsOrganizationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList <a name="DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference <a name="DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.parallelism">Parallelism</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.projects">Projects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganization">DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parallelism`<sup>Required</sup> <a name="Parallelism" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.parallelism"></a>

```csharp
public double Parallelism { get; }
```

- *Type:* double

---

##### `Projects`<sup>Required</sup> <a name="Projects" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.projects"></a>

```csharp
public string[] Projects { get; }
```

- *Type:* string[]

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganization InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganization">DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganization</a>

---


### DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference <a name="DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.organization">Organization</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList">DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.permission">Permission</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList">DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganization">DataAzurermManagedDevopsPoolAzureDevopsOrganization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.organization"></a>

```csharp
public DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList Organization { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList">DataAzurermManagedDevopsPoolAzureDevopsOrganizationOrganizationList</a>

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.permission"></a>

```csharp
public DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList Permission { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList">DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolAzureDevopsOrganization InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganization">DataAzurermManagedDevopsPoolAzureDevopsOrganization</a>

---


### DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList <a name="DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference <a name="DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.groups">Groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.users">Users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount">DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.groups"></a>

```csharp
public string[] Groups { get; }
```

- *Type:* string[]

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.users"></a>

```csharp
public string[] Users { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount">DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount</a>

---


### DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList <a name="DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference <a name="DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.administratorAccount">AdministratorAccount</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList">DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermission">DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermission</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdministratorAccount`<sup>Required</sup> <a name="AdministratorAccount" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.administratorAccount"></a>

```csharp
public DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList AdministratorAccount { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList">DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountList</a>

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermission InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermission">DataAzurermManagedDevopsPoolAzureDevopsOrganizationPermission</a>

---


### DataAzurermManagedDevopsPoolIdentityList <a name="DataAzurermManagedDevopsPoolIdentityList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolIdentityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolIdentityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolIdentityOutputReference <a name="DataAzurermManagedDevopsPoolIdentityOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentity">DataAzurermManagedDevopsPoolIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentityOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolIdentity">DataAzurermManagedDevopsPoolIdentity</a>

---


### DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList <a name="DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference <a name="DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.predictionPreference">PredictionPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePrediction">DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePrediction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PredictionPreference`<sup>Required</sup> <a name="PredictionPreference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.predictionPreference"></a>

```csharp
public string PredictionPreference { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePrediction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePrediction">DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePrediction</a>

---


### DataAzurermManagedDevopsPoolStatefulAgentList <a name="DataAzurermManagedDevopsPoolStatefulAgentList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolStatefulAgentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.allWeekSchedule">AllWeekSchedule</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.fridaySchedule">FridaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.mondaySchedule">MondaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.saturdaySchedule">SaturdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.sundaySchedule">SundaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.thursdaySchedule">ThursdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.timeZoneName">TimeZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.tuesdaySchedule">TuesdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.wednesdaySchedule">WednesdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePrediction">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePrediction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllWeekSchedule`<sup>Required</sup> <a name="AllWeekSchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.allWeekSchedule"></a>

```csharp
public double AllWeekSchedule { get; }
```

- *Type:* double

---

##### `FridaySchedule`<sup>Required</sup> <a name="FridaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.fridaySchedule"></a>

```csharp
public DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList FridaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList</a>

---

##### `MondaySchedule`<sup>Required</sup> <a name="MondaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.mondaySchedule"></a>

```csharp
public DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList MondaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList</a>

---

##### `SaturdaySchedule`<sup>Required</sup> <a name="SaturdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.saturdaySchedule"></a>

```csharp
public DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList SaturdaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList</a>

---

##### `SundaySchedule`<sup>Required</sup> <a name="SundaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.sundaySchedule"></a>

```csharp
public DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList SundaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList</a>

---

##### `ThursdaySchedule`<sup>Required</sup> <a name="ThursdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.thursdaySchedule"></a>

```csharp
public DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList ThursdaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList</a>

---

##### `TimeZoneName`<sup>Required</sup> <a name="TimeZoneName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.timeZoneName"></a>

```csharp
public string TimeZoneName { get; }
```

- *Type:* string

---

##### `TuesdaySchedule`<sup>Required</sup> <a name="TuesdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.tuesdaySchedule"></a>

```csharp
public DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList TuesdaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList</a>

---

##### `WednesdaySchedule`<sup>Required</sup> <a name="WednesdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.wednesdaySchedule"></a>

```csharp
public DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList WednesdaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolStatefulAgentManualResourcePrediction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePrediction">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePrediction</a>

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatefulAgentOutputReference <a name="DataAzurermManagedDevopsPoolStatefulAgentOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatefulAgentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.automaticResourcePrediction">AutomaticResourcePrediction</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList">DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.gracePeriodTimeSpan">GracePeriodTimeSpan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.manualResourcePrediction">ManualResourcePrediction</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.maximumAgentLifetime">MaximumAgentLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgent">DataAzurermManagedDevopsPoolStatefulAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutomaticResourcePrediction`<sup>Required</sup> <a name="AutomaticResourcePrediction" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.automaticResourcePrediction"></a>

```csharp
public DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList AutomaticResourcePrediction { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList">DataAzurermManagedDevopsPoolStatefulAgentAutomaticResourcePredictionList</a>

---

##### `GracePeriodTimeSpan`<sup>Required</sup> <a name="GracePeriodTimeSpan" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.gracePeriodTimeSpan"></a>

```csharp
public string GracePeriodTimeSpan { get; }
```

- *Type:* string

---

##### `ManualResourcePrediction`<sup>Required</sup> <a name="ManualResourcePrediction" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.manualResourcePrediction"></a>

```csharp
public DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList ManualResourcePrediction { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList">DataAzurermManagedDevopsPoolStatefulAgentManualResourcePredictionList</a>

---

##### `MaximumAgentLifetime`<sup>Required</sup> <a name="MaximumAgentLifetime" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.maximumAgentLifetime"></a>

```csharp
public string MaximumAgentLifetime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgentOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolStatefulAgent InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatefulAgent">DataAzurermManagedDevopsPoolStatefulAgent</a>

---


### DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList <a name="DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference <a name="DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.predictionPreference">PredictionPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePrediction">DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePrediction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PredictionPreference`<sup>Required</sup> <a name="PredictionPreference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.predictionPreference"></a>

```csharp
public string PredictionPreference { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePrediction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePrediction">DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePrediction</a>

---


### DataAzurermManagedDevopsPoolStatelessAgentList <a name="DataAzurermManagedDevopsPoolStatelessAgentList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolStatelessAgentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.allWeekSchedule">AllWeekSchedule</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.fridaySchedule">FridaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.mondaySchedule">MondaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.saturdaySchedule">SaturdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.sundaySchedule">SundaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.thursdaySchedule">ThursdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.timeZoneName">TimeZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.tuesdaySchedule">TuesdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.wednesdaySchedule">WednesdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePrediction">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePrediction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllWeekSchedule`<sup>Required</sup> <a name="AllWeekSchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.allWeekSchedule"></a>

```csharp
public double AllWeekSchedule { get; }
```

- *Type:* double

---

##### `FridaySchedule`<sup>Required</sup> <a name="FridaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.fridaySchedule"></a>

```csharp
public DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList FridaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList</a>

---

##### `MondaySchedule`<sup>Required</sup> <a name="MondaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.mondaySchedule"></a>

```csharp
public DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList MondaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList</a>

---

##### `SaturdaySchedule`<sup>Required</sup> <a name="SaturdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.saturdaySchedule"></a>

```csharp
public DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList SaturdaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList</a>

---

##### `SundaySchedule`<sup>Required</sup> <a name="SundaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.sundaySchedule"></a>

```csharp
public DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList SundaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList</a>

---

##### `ThursdaySchedule`<sup>Required</sup> <a name="ThursdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.thursdaySchedule"></a>

```csharp
public DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList ThursdaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList</a>

---

##### `TimeZoneName`<sup>Required</sup> <a name="TimeZoneName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.timeZoneName"></a>

```csharp
public string TimeZoneName { get; }
```

- *Type:* string

---

##### `TuesdaySchedule`<sup>Required</sup> <a name="TuesdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.tuesdaySchedule"></a>

```csharp
public DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList TuesdaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList</a>

---

##### `WednesdaySchedule`<sup>Required</sup> <a name="WednesdaySchedule" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.wednesdaySchedule"></a>

```csharp
public DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList WednesdaySchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolStatelessAgentManualResourcePrediction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePrediction">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePrediction</a>

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference <a name="DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>

---


### DataAzurermManagedDevopsPoolStatelessAgentOutputReference <a name="DataAzurermManagedDevopsPoolStatelessAgentOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolStatelessAgentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.property.automaticResourcePrediction">AutomaticResourcePrediction</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList">DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.property.manualResourcePrediction">ManualResourcePrediction</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgent">DataAzurermManagedDevopsPoolStatelessAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutomaticResourcePrediction`<sup>Required</sup> <a name="AutomaticResourcePrediction" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.property.automaticResourcePrediction"></a>

```csharp
public DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList AutomaticResourcePrediction { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList">DataAzurermManagedDevopsPoolStatelessAgentAutomaticResourcePredictionList</a>

---

##### `ManualResourcePrediction`<sup>Required</sup> <a name="ManualResourcePrediction" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.property.manualResourcePrediction"></a>

```csharp
public DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList ManualResourcePrediction { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList">DataAzurermManagedDevopsPoolStatelessAgentManualResourcePredictionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgentOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolStatelessAgent InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolStatelessAgent">DataAzurermManagedDevopsPoolStatelessAgent</a>

---


### DataAzurermManagedDevopsPoolTimeoutsOutputReference <a name="DataAzurermManagedDevopsPoolTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeouts">DataAzurermManagedDevopsPoolTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAzurermManagedDevopsPoolTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolTimeouts">DataAzurermManagedDevopsPoolTimeouts</a>

---


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.aliases">Aliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.buffer">Buffer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.wellKnownImageName">WellKnownImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImage">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aliases`<sup>Required</sup> <a name="Aliases" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.aliases"></a>

```csharp
public string[] Aliases { get; }
```

- *Type:* string[]

---

##### `Buffer`<sup>Required</sup> <a name="Buffer" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.buffer"></a>

```csharp
public string Buffer { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `WellKnownImageName`<sup>Required</sup> <a name="WellKnownImageName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.wellKnownImageName"></a>

```csharp
public string WellKnownImageName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImage">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>

---


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.image">Image</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.osDiskStorageAccountType">OsDiskStorageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.security">Security</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.skuName">SkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.storage">Storage</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabric">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.image"></a>

```csharp
public DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList Image { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricImageList</a>

---

##### `OsDiskStorageAccountType`<sup>Required</sup> <a name="OsDiskStorageAccountType" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.osDiskStorageAccountType"></a>

```csharp
public string OsDiskStorageAccountType { get; }
```

- *Type:* string

---

##### `Security`<sup>Required</sup> <a name="Security" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.security"></a>

```csharp
public DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList Security { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList</a>

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.skuName"></a>

```csharp
public string SkuName { get; }
```

- *Type:* string

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.storage"></a>

```csharp
public DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList Storage { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList</a>

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabric InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabric">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabric</a>

---


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreLocation">CertificateStoreLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreName">CertificateStoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyExportEnabled">KeyExportEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyVaultCertificateIds">KeyVaultCertificateIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateStoreLocation`<sup>Required</sup> <a name="CertificateStoreLocation" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreLocation"></a>

```csharp
public string CertificateStoreLocation { get; }
```

- *Type:* string

---

##### `CertificateStoreName`<sup>Required</sup> <a name="CertificateStoreName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreName"></a>

```csharp
public string CertificateStoreName { get; }
```

- *Type:* string

---

##### `KeyExportEnabled`<sup>Required</sup> <a name="KeyExportEnabled" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyExportEnabled"></a>

```csharp
public IResolvable KeyExportEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `KeyVaultCertificateIds`<sup>Required</sup> <a name="KeyVaultCertificateIds" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyVaultCertificateIds"></a>

```csharp
public string[] KeyVaultCertificateIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement</a>

---


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.interactiveLogonEnabled">InteractiveLogonEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.keyVaultManagement">KeyVaultManagement</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurity">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InteractiveLogonEnabled`<sup>Required</sup> <a name="InteractiveLogonEnabled" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.interactiveLogonEnabled"></a>

```csharp
public IResolvable InteractiveLogonEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `KeyVaultManagement`<sup>Required</sup> <a name="KeyVaultManagement" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.keyVaultManagement"></a>

```csharp
public DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList KeyVaultManagement { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurity">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricSecurity</a>

---


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.get"></a>

```csharp
private DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference <a name="DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.caching">Caching</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.diskSizeInGb">DiskSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.driveLetter">DriveLetter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.storageAccountType">StorageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorage">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.caching"></a>

```csharp
public string Caching { get; }
```

- *Type:* string

---

##### `DiskSizeInGb`<sup>Required</sup> <a name="DiskSizeInGb" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.diskSizeInGb"></a>

```csharp
public double DiskSizeInGb { get; }
```

- *Type:* double

---

##### `DriveLetter`<sup>Required</sup> <a name="DriveLetter" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.driveLetter"></a>

```csharp
public string DriveLetter { get; }
```

- *Type:* string

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.storageAccountType"></a>

```csharp
public string StorageAccountType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.internalValue"></a>

```csharp
public DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagedDevopsPool.DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorage">DataAzurermManagedDevopsPoolVirtualMachineScaleSetFabricStorage</a>

---



