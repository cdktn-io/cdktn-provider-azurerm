# `dataAzurermKubernetesServiceVersions` Submodule <a name="`dataAzurermKubernetesServiceVersions` Submodule" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKubernetesServiceVersions <a name="DataAzurermKubernetesServiceVersions" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/kubernetes_service_versions azurerm_kubernetes_service_versions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermKubernetesServiceVersions(Construct Scope, string Id, DataAzurermKubernetesServiceVersionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig">DataAzurermKubernetesServiceVersionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig">DataAzurermKubernetesServiceVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.resetIncludePreview">ResetIncludePreview</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.resetVersionPrefix">ResetVersionPrefix</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermKubernetesServiceVersionsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeouts">DataAzurermKubernetesServiceVersionsTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludePreview` <a name="ResetIncludePreview" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.resetIncludePreview"></a>

```csharp
private void ResetIncludePreview()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVersionPrefix` <a name="ResetVersionPrefix" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.resetVersionPrefix"></a>

```csharp
private void ResetVersionPrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermKubernetesServiceVersions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermKubernetesServiceVersions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermKubernetesServiceVersions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermKubernetesServiceVersions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermKubernetesServiceVersions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAzurermKubernetesServiceVersions resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermKubernetesServiceVersions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermKubernetesServiceVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/kubernetes_service_versions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermKubernetesServiceVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.defaultVersion">DefaultVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.latestVersion">LatestVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference">DataAzurermKubernetesServiceVersionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.versions">Versions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.includePreviewInput">IncludePreviewInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeouts">DataAzurermKubernetesServiceVersionsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.versionPrefixInput">VersionPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.includePreview">IncludePreview</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.versionPrefix">VersionPrefix</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DefaultVersion`<sup>Required</sup> <a name="DefaultVersion" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.defaultVersion"></a>

```csharp
public string DefaultVersion { get; }
```

- *Type:* string

---

##### `LatestVersion`<sup>Required</sup> <a name="LatestVersion" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.latestVersion"></a>

```csharp
public string LatestVersion { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.timeouts"></a>

```csharp
public DataAzurermKubernetesServiceVersionsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference">DataAzurermKubernetesServiceVersionsTimeoutsOutputReference</a>

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.versions"></a>

```csharp
public string[] Versions { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludePreviewInput`<sup>Optional</sup> <a name="IncludePreviewInput" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.includePreviewInput"></a>

```csharp
public bool|IResolvable IncludePreviewInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAzurermKubernetesServiceVersionsTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeouts">DataAzurermKubernetesServiceVersionsTimeouts</a>

---

##### `VersionPrefixInput`<sup>Optional</sup> <a name="VersionPrefixInput" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.versionPrefixInput"></a>

```csharp
public string VersionPrefixInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludePreview`<sup>Required</sup> <a name="IncludePreview" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.includePreview"></a>

```csharp
public bool|IResolvable IncludePreview { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `VersionPrefix`<sup>Required</sup> <a name="VersionPrefix" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.versionPrefix"></a>

```csharp
public string VersionPrefix { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKubernetesServiceVersionsConfig <a name="DataAzurermKubernetesServiceVersionsConfig" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermKubernetesServiceVersionsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Id = null,
    bool|IResolvable IncludePreview = null,
    DataAzurermKubernetesServiceVersionsTimeouts Timeouts = null,
    string VersionPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/kubernetes_service_versions#location DataAzurermKubernetesServiceVersions#location}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/kubernetes_service_versions#id DataAzurermKubernetesServiceVersions#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig.property.includePreview">IncludePreview</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/kubernetes_service_versions#include_preview DataAzurermKubernetesServiceVersions#include_preview}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeouts">DataAzurermKubernetesServiceVersionsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig.property.versionPrefix">VersionPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/kubernetes_service_versions#version_prefix DataAzurermKubernetesServiceVersions#version_prefix}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/kubernetes_service_versions#location DataAzurermKubernetesServiceVersions#location}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/kubernetes_service_versions#id DataAzurermKubernetesServiceVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludePreview`<sup>Optional</sup> <a name="IncludePreview" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig.property.includePreview"></a>

```csharp
public bool|IResolvable IncludePreview { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/kubernetes_service_versions#include_preview DataAzurermKubernetesServiceVersions#include_preview}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig.property.timeouts"></a>

```csharp
public DataAzurermKubernetesServiceVersionsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeouts">DataAzurermKubernetesServiceVersionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/kubernetes_service_versions#timeouts DataAzurermKubernetesServiceVersions#timeouts}

---

##### `VersionPrefix`<sup>Optional</sup> <a name="VersionPrefix" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsConfig.property.versionPrefix"></a>

```csharp
public string VersionPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/kubernetes_service_versions#version_prefix DataAzurermKubernetesServiceVersions#version_prefix}.

---

### DataAzurermKubernetesServiceVersionsTimeouts <a name="DataAzurermKubernetesServiceVersionsTimeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermKubernetesServiceVersionsTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/kubernetes_service_versions#read DataAzurermKubernetesServiceVersions#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/kubernetes_service_versions#read DataAzurermKubernetesServiceVersions#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKubernetesServiceVersionsTimeoutsOutputReference <a name="DataAzurermKubernetesServiceVersionsTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermKubernetesServiceVersionsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeouts">DataAzurermKubernetesServiceVersionsTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAzurermKubernetesServiceVersionsTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermKubernetesServiceVersions.DataAzurermKubernetesServiceVersionsTimeouts">DataAzurermKubernetesServiceVersionsTimeouts</a>

---



