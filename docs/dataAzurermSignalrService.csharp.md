# `dataAzurermSignalrService` Submodule <a name="`dataAzurermSignalrService` Submodule" id="@cdktn/provider-azurerm.dataAzurermSignalrService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermSignalrService <a name="DataAzurermSignalrService" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/signalr_service azurerm_signalr_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermSignalrService(Construct Scope, string Id, DataAzurermSignalrServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig">DataAzurermSignalrServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig">DataAzurermSignalrServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermSignalrServiceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeouts">DataAzurermSignalrServiceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermSignalrService resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermSignalrService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermSignalrService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermSignalrService.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermSignalrService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAzurermSignalrService resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermSignalrService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermSignalrService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/signalr_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermSignalrService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.aadAuthEnabled">AadAuthEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.connectivityLogsEnabled">ConnectivityLogsEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.cors">Cors</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList">DataAzurermSignalrServiceCorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.httpRequestLogsEnabled">HttpRequestLogsEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList">DataAzurermSignalrServiceIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.liveTrace">LiveTrace</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList">DataAzurermSignalrServiceLiveTraceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.messagingLogsEnabled">MessagingLogsEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.primaryAccessKey">PrimaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.primaryConnectionString">PrimaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.publicPort">PublicPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.secondaryAccessKey">SecondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.secondaryConnectionString">SecondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.serverlessConnectionTimeoutInSeconds">ServerlessConnectionTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.serverPort">ServerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.serviceMode">ServiceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.sku">Sku</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList">DataAzurermSignalrServiceSkuList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference">DataAzurermSignalrServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.tlsClientCertEnabled">TlsClientCertEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.upstreamEndpoint">UpstreamEndpoint</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList">DataAzurermSignalrServiceUpstreamEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeouts">DataAzurermSignalrServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AadAuthEnabled`<sup>Required</sup> <a name="AadAuthEnabled" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.aadAuthEnabled"></a>

```csharp
public IResolvable AadAuthEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ConnectivityLogsEnabled`<sup>Required</sup> <a name="ConnectivityLogsEnabled" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.connectivityLogsEnabled"></a>

```csharp
public IResolvable ConnectivityLogsEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Cors`<sup>Required</sup> <a name="Cors" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.cors"></a>

```csharp
public DataAzurermSignalrServiceCorsList Cors { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList">DataAzurermSignalrServiceCorsList</a>

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `HttpRequestLogsEnabled`<sup>Required</sup> <a name="HttpRequestLogsEnabled" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.httpRequestLogsEnabled"></a>

```csharp
public IResolvable HttpRequestLogsEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.identity"></a>

```csharp
public DataAzurermSignalrServiceIdentityList Identity { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList">DataAzurermSignalrServiceIdentityList</a>

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `LiveTrace`<sup>Required</sup> <a name="LiveTrace" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.liveTrace"></a>

```csharp
public DataAzurermSignalrServiceLiveTraceList LiveTrace { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList">DataAzurermSignalrServiceLiveTraceList</a>

---

##### `LocalAuthEnabled`<sup>Required</sup> <a name="LocalAuthEnabled" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.localAuthEnabled"></a>

```csharp
public IResolvable LocalAuthEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MessagingLogsEnabled`<sup>Required</sup> <a name="MessagingLogsEnabled" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.messagingLogsEnabled"></a>

```csharp
public IResolvable MessagingLogsEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `PrimaryAccessKey`<sup>Required</sup> <a name="PrimaryAccessKey" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.primaryAccessKey"></a>

```csharp
public string PrimaryAccessKey { get; }
```

- *Type:* string

---

##### `PrimaryConnectionString`<sup>Required</sup> <a name="PrimaryConnectionString" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.primaryConnectionString"></a>

```csharp
public string PrimaryConnectionString { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.publicNetworkAccessEnabled"></a>

```csharp
public IResolvable PublicNetworkAccessEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `PublicPort`<sup>Required</sup> <a name="PublicPort" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.publicPort"></a>

```csharp
public double PublicPort { get; }
```

- *Type:* double

---

##### `SecondaryAccessKey`<sup>Required</sup> <a name="SecondaryAccessKey" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.secondaryAccessKey"></a>

```csharp
public string SecondaryAccessKey { get; }
```

- *Type:* string

---

##### `SecondaryConnectionString`<sup>Required</sup> <a name="SecondaryConnectionString" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.secondaryConnectionString"></a>

```csharp
public string SecondaryConnectionString { get; }
```

- *Type:* string

---

##### `ServerlessConnectionTimeoutInSeconds`<sup>Required</sup> <a name="ServerlessConnectionTimeoutInSeconds" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.serverlessConnectionTimeoutInSeconds"></a>

```csharp
public double ServerlessConnectionTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `ServerPort`<sup>Required</sup> <a name="ServerPort" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.serverPort"></a>

```csharp
public double ServerPort { get; }
```

- *Type:* double

---

##### `ServiceMode`<sup>Required</sup> <a name="ServiceMode" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.serviceMode"></a>

```csharp
public string ServiceMode { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.sku"></a>

```csharp
public DataAzurermSignalrServiceSkuList Sku { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList">DataAzurermSignalrServiceSkuList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.timeouts"></a>

```csharp
public DataAzurermSignalrServiceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference">DataAzurermSignalrServiceTimeoutsOutputReference</a>

---

##### `TlsClientCertEnabled`<sup>Required</sup> <a name="TlsClientCertEnabled" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.tlsClientCertEnabled"></a>

```csharp
public IResolvable TlsClientCertEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UpstreamEndpoint`<sup>Required</sup> <a name="UpstreamEndpoint" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.upstreamEndpoint"></a>

```csharp
public DataAzurermSignalrServiceUpstreamEndpointList UpstreamEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList">DataAzurermSignalrServiceUpstreamEndpointList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAzurermSignalrServiceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeouts">DataAzurermSignalrServiceTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermSignalrServiceConfig <a name="DataAzurermSignalrServiceConfig" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermSignalrServiceConfig {
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
    DataAzurermSignalrServiceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/signalr_service#name DataAzurermSignalrService#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/signalr_service#resource_group_name DataAzurermSignalrService#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/signalr_service#id DataAzurermSignalrService#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeouts">DataAzurermSignalrServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/signalr_service#name DataAzurermSignalrService#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/signalr_service#resource_group_name DataAzurermSignalrService#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/signalr_service#id DataAzurermSignalrService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.timeouts"></a>

```csharp
public DataAzurermSignalrServiceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeouts">DataAzurermSignalrServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/signalr_service#timeouts DataAzurermSignalrService#timeouts}

---

### DataAzurermSignalrServiceCors <a name="DataAzurermSignalrServiceCors" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermSignalrServiceCors {

};
```


### DataAzurermSignalrServiceIdentity <a name="DataAzurermSignalrServiceIdentity" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermSignalrServiceIdentity {

};
```


### DataAzurermSignalrServiceLiveTrace <a name="DataAzurermSignalrServiceLiveTrace" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTrace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTrace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermSignalrServiceLiveTrace {

};
```


### DataAzurermSignalrServiceSku <a name="DataAzurermSignalrServiceSku" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSku"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSku.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermSignalrServiceSku {

};
```


### DataAzurermSignalrServiceTimeouts <a name="DataAzurermSignalrServiceTimeouts" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermSignalrServiceTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/signalr_service#read DataAzurermSignalrService#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/signalr_service#read DataAzurermSignalrService#read}.

---

### DataAzurermSignalrServiceUpstreamEndpoint <a name="DataAzurermSignalrServiceUpstreamEndpoint" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermSignalrServiceUpstreamEndpoint {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermSignalrServiceCorsList <a name="DataAzurermSignalrServiceCorsList" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermSignalrServiceCorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList.get"></a>

```csharp
private DataAzurermSignalrServiceCorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermSignalrServiceCorsOutputReference <a name="DataAzurermSignalrServiceCorsOutputReference" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermSignalrServiceCorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCors">DataAzurermSignalrServiceCors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCorsOutputReference.property.internalValue"></a>

```csharp
public DataAzurermSignalrServiceCors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceCors">DataAzurermSignalrServiceCors</a>

---


### DataAzurermSignalrServiceIdentityList <a name="DataAzurermSignalrServiceIdentityList" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermSignalrServiceIdentityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList.get"></a>

```csharp
private DataAzurermSignalrServiceIdentityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermSignalrServiceIdentityOutputReference <a name="DataAzurermSignalrServiceIdentityOutputReference" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermSignalrServiceIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentity">DataAzurermSignalrServiceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentityOutputReference.property.internalValue"></a>

```csharp
public DataAzurermSignalrServiceIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceIdentity">DataAzurermSignalrServiceIdentity</a>

---


### DataAzurermSignalrServiceLiveTraceList <a name="DataAzurermSignalrServiceLiveTraceList" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermSignalrServiceLiveTraceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList.get"></a>

```csharp
private DataAzurermSignalrServiceLiveTraceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermSignalrServiceLiveTraceOutputReference <a name="DataAzurermSignalrServiceLiveTraceOutputReference" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermSignalrServiceLiveTraceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.property.connectivityLogsEnabled">ConnectivityLogsEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.property.httpRequestLogsEnabled">HttpRequestLogsEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.property.messagingLogsEnabled">MessagingLogsEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTrace">DataAzurermSignalrServiceLiveTrace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectivityLogsEnabled`<sup>Required</sup> <a name="ConnectivityLogsEnabled" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.property.connectivityLogsEnabled"></a>

```csharp
public IResolvable ConnectivityLogsEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `HttpRequestLogsEnabled`<sup>Required</sup> <a name="HttpRequestLogsEnabled" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.property.httpRequestLogsEnabled"></a>

```csharp
public IResolvable HttpRequestLogsEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MessagingLogsEnabled`<sup>Required</sup> <a name="MessagingLogsEnabled" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.property.messagingLogsEnabled"></a>

```csharp
public IResolvable MessagingLogsEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTraceOutputReference.property.internalValue"></a>

```csharp
public DataAzurermSignalrServiceLiveTrace InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceLiveTrace">DataAzurermSignalrServiceLiveTrace</a>

---


### DataAzurermSignalrServiceSkuList <a name="DataAzurermSignalrServiceSkuList" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermSignalrServiceSkuList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList.get"></a>

```csharp
private DataAzurermSignalrServiceSkuOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermSignalrServiceSkuOutputReference <a name="DataAzurermSignalrServiceSkuOutputReference" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermSignalrServiceSkuOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.property.capacity">Capacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSku">DataAzurermSignalrServiceSku</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.property.capacity"></a>

```csharp
public double Capacity { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSkuOutputReference.property.internalValue"></a>

```csharp
public DataAzurermSignalrServiceSku InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceSku">DataAzurermSignalrServiceSku</a>

---


### DataAzurermSignalrServiceTimeoutsOutputReference <a name="DataAzurermSignalrServiceTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermSignalrServiceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeouts">DataAzurermSignalrServiceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAzurermSignalrServiceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeouts">DataAzurermSignalrServiceTimeouts</a>

---


### DataAzurermSignalrServiceUpstreamEndpointList <a name="DataAzurermSignalrServiceUpstreamEndpointList" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermSignalrServiceUpstreamEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList.get"></a>

```csharp
private DataAzurermSignalrServiceUpstreamEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermSignalrServiceUpstreamEndpointOutputReference <a name="DataAzurermSignalrServiceUpstreamEndpointOutputReference" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermSignalrServiceUpstreamEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.property.categoryPattern">CategoryPattern</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.property.eventPattern">EventPattern</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.property.hubPattern">HubPattern</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.property.urlTemplate">UrlTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpoint">DataAzurermSignalrServiceUpstreamEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CategoryPattern`<sup>Required</sup> <a name="CategoryPattern" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.property.categoryPattern"></a>

```csharp
public string[] CategoryPattern { get; }
```

- *Type:* string[]

---

##### `EventPattern`<sup>Required</sup> <a name="EventPattern" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.property.eventPattern"></a>

```csharp
public string[] EventPattern { get; }
```

- *Type:* string[]

---

##### `HubPattern`<sup>Required</sup> <a name="HubPattern" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.property.hubPattern"></a>

```csharp
public string[] HubPattern { get; }
```

- *Type:* string[]

---

##### `UrlTemplate`<sup>Required</sup> <a name="UrlTemplate" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.property.urlTemplate"></a>

```csharp
public string UrlTemplate { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpointOutputReference.property.internalValue"></a>

```csharp
public DataAzurermSignalrServiceUpstreamEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceUpstreamEndpoint">DataAzurermSignalrServiceUpstreamEndpoint</a>

---



