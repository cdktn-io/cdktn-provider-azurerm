# `dataAzurermNetworkSecurityPerimeterProfile` Submodule <a name="`dataAzurermNetworkSecurityPerimeterProfile` Submodule" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNetworkSecurityPerimeterProfile <a name="DataAzurermNetworkSecurityPerimeterProfile" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_security_perimeter_profile azurerm_network_security_perimeter_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermNetworkSecurityPerimeterProfile(Construct Scope, string Id, DataAzurermNetworkSecurityPerimeterProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig">DataAzurermNetworkSecurityPerimeterProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig">DataAzurermNetworkSecurityPerimeterProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermNetworkSecurityPerimeterProfileTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts">DataAzurermNetworkSecurityPerimeterProfileTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermNetworkSecurityPerimeterProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermNetworkSecurityPerimeterProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermNetworkSecurityPerimeterProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermNetworkSecurityPerimeterProfile.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermNetworkSecurityPerimeterProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAzurermNetworkSecurityPerimeterProfile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermNetworkSecurityPerimeterProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermNetworkSecurityPerimeterProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_security_perimeter_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermNetworkSecurityPerimeterProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference">DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.networkSecurityPerimeterIdInput">NetworkSecurityPerimeterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts">DataAzurermNetworkSecurityPerimeterProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.networkSecurityPerimeterId">NetworkSecurityPerimeterId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.timeouts"></a>

```csharp
public DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference">DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkSecurityPerimeterIdInput`<sup>Optional</sup> <a name="NetworkSecurityPerimeterIdInput" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.networkSecurityPerimeterIdInput"></a>

```csharp
public string NetworkSecurityPerimeterIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAzurermNetworkSecurityPerimeterProfileTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts">DataAzurermNetworkSecurityPerimeterProfileTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkSecurityPerimeterId`<sup>Required</sup> <a name="NetworkSecurityPerimeterId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.networkSecurityPerimeterId"></a>

```csharp
public string NetworkSecurityPerimeterId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNetworkSecurityPerimeterProfileConfig <a name="DataAzurermNetworkSecurityPerimeterProfileConfig" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermNetworkSecurityPerimeterProfileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string NetworkSecurityPerimeterId,
    string Id = null,
    DataAzurermNetworkSecurityPerimeterProfileTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_security_perimeter_profile#name DataAzurermNetworkSecurityPerimeterProfile#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.networkSecurityPerimeterId">NetworkSecurityPerimeterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_security_perimeter_profile#network_security_perimeter_id DataAzurermNetworkSecurityPerimeterProfile#network_security_perimeter_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_security_perimeter_profile#id DataAzurermNetworkSecurityPerimeterProfile#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts">DataAzurermNetworkSecurityPerimeterProfileTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_security_perimeter_profile#name DataAzurermNetworkSecurityPerimeterProfile#name}.

---

##### `NetworkSecurityPerimeterId`<sup>Required</sup> <a name="NetworkSecurityPerimeterId" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.networkSecurityPerimeterId"></a>

```csharp
public string NetworkSecurityPerimeterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_security_perimeter_profile#network_security_perimeter_id DataAzurermNetworkSecurityPerimeterProfile#network_security_perimeter_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_security_perimeter_profile#id DataAzurermNetworkSecurityPerimeterProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileConfig.property.timeouts"></a>

```csharp
public DataAzurermNetworkSecurityPerimeterProfileTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts">DataAzurermNetworkSecurityPerimeterProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_security_perimeter_profile#timeouts DataAzurermNetworkSecurityPerimeterProfile#timeouts}

---

### DataAzurermNetworkSecurityPerimeterProfileTimeouts <a name="DataAzurermNetworkSecurityPerimeterProfileTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermNetworkSecurityPerimeterProfileTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_security_perimeter_profile#read DataAzurermNetworkSecurityPerimeterProfile#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/network_security_perimeter_profile#read DataAzurermNetworkSecurityPerimeterProfile#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference <a name="DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts">DataAzurermNetworkSecurityPerimeterProfileTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAzurermNetworkSecurityPerimeterProfileTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermNetworkSecurityPerimeterProfile.DataAzurermNetworkSecurityPerimeterProfileTimeouts">DataAzurermNetworkSecurityPerimeterProfileTimeouts</a>

---



