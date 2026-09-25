# `dataAzurermExpressRouteCircuitPeering` Submodule <a name="`dataAzurermExpressRouteCircuitPeering` Submodule" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermExpressRouteCircuitPeering <a name="DataAzurermExpressRouteCircuitPeering" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering azurerm_express_route_circuit_peering}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermExpressRouteCircuitPeering(Construct Scope, string Id, DataAzurermExpressRouteCircuitPeeringConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig">DataAzurermExpressRouteCircuitPeeringConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig">DataAzurermExpressRouteCircuitPeeringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermExpressRouteCircuitPeeringTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts">DataAzurermExpressRouteCircuitPeeringTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermExpressRouteCircuitPeering resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermExpressRouteCircuitPeering.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermExpressRouteCircuitPeering.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermExpressRouteCircuitPeering.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermExpressRouteCircuitPeering.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAzurermExpressRouteCircuitPeering resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermExpressRouteCircuitPeering to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermExpressRouteCircuitPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermExpressRouteCircuitPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.azureAsn">AzureAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.gatewayManagerEtag">GatewayManagerEtag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.ipv4Enabled">Ipv4Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List">DataAzurermExpressRouteCircuitPeeringIpv6List</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.microsoftPeeringConfig">MicrosoftPeeringConfig</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList">DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.peerAsn">PeerAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.primaryAzurePort">PrimaryAzurePort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.primaryPeerAddressPrefix">PrimaryPeerAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.routeFilterId">RouteFilterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.secondaryAzurePort">SecondaryAzurePort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.secondaryPeerAddressPrefix">SecondaryPeerAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.sharedKey">SharedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference">DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.vlanId">VlanId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.expressRouteCircuitNameInput">ExpressRouteCircuitNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.peeringTypeInput">PeeringTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts">DataAzurermExpressRouteCircuitPeeringTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.expressRouteCircuitName">ExpressRouteCircuitName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.peeringType">PeeringType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AzureAsn`<sup>Required</sup> <a name="AzureAsn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.azureAsn"></a>

```csharp
public double AzureAsn { get; }
```

- *Type:* double

---

##### `GatewayManagerEtag`<sup>Required</sup> <a name="GatewayManagerEtag" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.gatewayManagerEtag"></a>

```csharp
public string GatewayManagerEtag { get; }
```

- *Type:* string

---

##### `Ipv4Enabled`<sup>Required</sup> <a name="Ipv4Enabled" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.ipv4Enabled"></a>

```csharp
public IResolvable Ipv4Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.ipv6"></a>

```csharp
public DataAzurermExpressRouteCircuitPeeringIpv6List Ipv6 { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List">DataAzurermExpressRouteCircuitPeeringIpv6List</a>

---

##### `MicrosoftPeeringConfig`<sup>Required</sup> <a name="MicrosoftPeeringConfig" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.microsoftPeeringConfig"></a>

```csharp
public DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList MicrosoftPeeringConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList">DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList</a>

---

##### `PeerAsn`<sup>Required</sup> <a name="PeerAsn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.peerAsn"></a>

```csharp
public double PeerAsn { get; }
```

- *Type:* double

---

##### `PrimaryAzurePort`<sup>Required</sup> <a name="PrimaryAzurePort" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.primaryAzurePort"></a>

```csharp
public string PrimaryAzurePort { get; }
```

- *Type:* string

---

##### `PrimaryPeerAddressPrefix`<sup>Required</sup> <a name="PrimaryPeerAddressPrefix" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.primaryPeerAddressPrefix"></a>

```csharp
public string PrimaryPeerAddressPrefix { get; }
```

- *Type:* string

---

##### `RouteFilterId`<sup>Required</sup> <a name="RouteFilterId" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.routeFilterId"></a>

```csharp
public string RouteFilterId { get; }
```

- *Type:* string

---

##### `SecondaryAzurePort`<sup>Required</sup> <a name="SecondaryAzurePort" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.secondaryAzurePort"></a>

```csharp
public string SecondaryAzurePort { get; }
```

- *Type:* string

---

##### `SecondaryPeerAddressPrefix`<sup>Required</sup> <a name="SecondaryPeerAddressPrefix" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.secondaryPeerAddressPrefix"></a>

```csharp
public string SecondaryPeerAddressPrefix { get; }
```

- *Type:* string

---

##### `SharedKey`<sup>Required</sup> <a name="SharedKey" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.sharedKey"></a>

```csharp
public string SharedKey { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.timeouts"></a>

```csharp
public DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference">DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference</a>

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.vlanId"></a>

```csharp
public double VlanId { get; }
```

- *Type:* double

---

##### `ExpressRouteCircuitNameInput`<sup>Optional</sup> <a name="ExpressRouteCircuitNameInput" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.expressRouteCircuitNameInput"></a>

```csharp
public string ExpressRouteCircuitNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PeeringTypeInput`<sup>Optional</sup> <a name="PeeringTypeInput" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.peeringTypeInput"></a>

```csharp
public string PeeringTypeInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAzurermExpressRouteCircuitPeeringTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts">DataAzurermExpressRouteCircuitPeeringTimeouts</a>

---

##### `ExpressRouteCircuitName`<sup>Required</sup> <a name="ExpressRouteCircuitName" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.expressRouteCircuitName"></a>

```csharp
public string ExpressRouteCircuitName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PeeringType`<sup>Required</sup> <a name="PeeringType" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.peeringType"></a>

```csharp
public string PeeringType { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermExpressRouteCircuitPeeringConfig <a name="DataAzurermExpressRouteCircuitPeeringConfig" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermExpressRouteCircuitPeeringConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ExpressRouteCircuitName,
    string PeeringType,
    string ResourceGroupName,
    string Id = null,
    DataAzurermExpressRouteCircuitPeeringTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.expressRouteCircuitName">ExpressRouteCircuitName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#express_route_circuit_name DataAzurermExpressRouteCircuitPeering#express_route_circuit_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.peeringType">PeeringType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#peering_type DataAzurermExpressRouteCircuitPeering#peering_type}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#resource_group_name DataAzurermExpressRouteCircuitPeering#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#id DataAzurermExpressRouteCircuitPeering#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts">DataAzurermExpressRouteCircuitPeeringTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ExpressRouteCircuitName`<sup>Required</sup> <a name="ExpressRouteCircuitName" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.expressRouteCircuitName"></a>

```csharp
public string ExpressRouteCircuitName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#express_route_circuit_name DataAzurermExpressRouteCircuitPeering#express_route_circuit_name}.

---

##### `PeeringType`<sup>Required</sup> <a name="PeeringType" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.peeringType"></a>

```csharp
public string PeeringType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#peering_type DataAzurermExpressRouteCircuitPeering#peering_type}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#resource_group_name DataAzurermExpressRouteCircuitPeering#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#id DataAzurermExpressRouteCircuitPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.timeouts"></a>

```csharp
public DataAzurermExpressRouteCircuitPeeringTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts">DataAzurermExpressRouteCircuitPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#timeouts DataAzurermExpressRouteCircuitPeering#timeouts}

---

### DataAzurermExpressRouteCircuitPeeringIpv6 <a name="DataAzurermExpressRouteCircuitPeeringIpv6" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermExpressRouteCircuitPeeringIpv6 {

};
```


### DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeering <a name="DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeering" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeering"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeering.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeering {

};
```


### DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfig <a name="DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfig" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfig {

};
```


### DataAzurermExpressRouteCircuitPeeringTimeouts <a name="DataAzurermExpressRouteCircuitPeeringTimeouts" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermExpressRouteCircuitPeeringTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#read DataAzurermExpressRouteCircuitPeering#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/data-sources/express_route_circuit_peering#read DataAzurermExpressRouteCircuitPeering#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermExpressRouteCircuitPeeringIpv6List <a name="DataAzurermExpressRouteCircuitPeeringIpv6List" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermExpressRouteCircuitPeeringIpv6List(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.get"></a>

```csharp
private DataAzurermExpressRouteCircuitPeeringIpv6OutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6List.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList <a name="DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.get"></a>

```csharp
private DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference <a name="DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedCommunities">AdvertisedCommunities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedPublicPrefixes">AdvertisedPublicPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.customerAsn">CustomerAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.routingRegistryName">RoutingRegistryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeering">DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeering</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvertisedCommunities`<sup>Required</sup> <a name="AdvertisedCommunities" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedCommunities"></a>

```csharp
public string[] AdvertisedCommunities { get; }
```

- *Type:* string[]

---

##### `AdvertisedPublicPrefixes`<sup>Required</sup> <a name="AdvertisedPublicPrefixes" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.advertisedPublicPrefixes"></a>

```csharp
public string[] AdvertisedPublicPrefixes { get; }
```

- *Type:* string[]

---

##### `CustomerAsn`<sup>Required</sup> <a name="CustomerAsn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.customerAsn"></a>

```csharp
public double CustomerAsn { get; }
```

- *Type:* double

---

##### `RoutingRegistryName`<sup>Required</sup> <a name="RoutingRegistryName" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.routingRegistryName"></a>

```csharp
public string RoutingRegistryName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringOutputReference.property.internalValue"></a>

```csharp
public DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeering InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeering">DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeering</a>

---


### DataAzurermExpressRouteCircuitPeeringIpv6OutputReference <a name="DataAzurermExpressRouteCircuitPeeringIpv6OutputReference" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermExpressRouteCircuitPeeringIpv6OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.microsoftPeering">MicrosoftPeering</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList">DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.primaryPeerAddressPrefix">PrimaryPeerAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.routeFilterId">RouteFilterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.secondaryPeerAddressPrefix">SecondaryPeerAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6">DataAzurermExpressRouteCircuitPeeringIpv6</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MicrosoftPeering`<sup>Required</sup> <a name="MicrosoftPeering" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.microsoftPeering"></a>

```csharp
public DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList MicrosoftPeering { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList">DataAzurermExpressRouteCircuitPeeringIpv6MicrosoftPeeringList</a>

---

##### `PrimaryPeerAddressPrefix`<sup>Required</sup> <a name="PrimaryPeerAddressPrefix" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.primaryPeerAddressPrefix"></a>

```csharp
public string PrimaryPeerAddressPrefix { get; }
```

- *Type:* string

---

##### `RouteFilterId`<sup>Required</sup> <a name="RouteFilterId" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.routeFilterId"></a>

```csharp
public string RouteFilterId { get; }
```

- *Type:* string

---

##### `SecondaryPeerAddressPrefix`<sup>Required</sup> <a name="SecondaryPeerAddressPrefix" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.secondaryPeerAddressPrefix"></a>

```csharp
public string SecondaryPeerAddressPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6OutputReference.property.internalValue"></a>

```csharp
public DataAzurermExpressRouteCircuitPeeringIpv6 InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringIpv6">DataAzurermExpressRouteCircuitPeeringIpv6</a>

---


### DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList <a name="DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.get"></a>

```csharp
private DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference <a name="DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedCommunities">AdvertisedCommunities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedPublicPrefixes">AdvertisedPublicPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.customerAsn">CustomerAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.routingRegistryName">RoutingRegistryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfig">DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvertisedCommunities`<sup>Required</sup> <a name="AdvertisedCommunities" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedCommunities"></a>

```csharp
public string[] AdvertisedCommunities { get; }
```

- *Type:* string[]

---

##### `AdvertisedPublicPrefixes`<sup>Required</sup> <a name="AdvertisedPublicPrefixes" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.advertisedPublicPrefixes"></a>

```csharp
public string[] AdvertisedPublicPrefixes { get; }
```

- *Type:* string[]

---

##### `CustomerAsn`<sup>Required</sup> <a name="CustomerAsn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.customerAsn"></a>

```csharp
public double CustomerAsn { get; }
```

- *Type:* double

---

##### `RoutingRegistryName`<sup>Required</sup> <a name="RoutingRegistryName" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.routingRegistryName"></a>

```csharp
public string RoutingRegistryName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfigOutputReference.property.internalValue"></a>

```csharp
public DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfig">DataAzurermExpressRouteCircuitPeeringMicrosoftPeeringConfig</a>

---


### DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference <a name="DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts">DataAzurermExpressRouteCircuitPeeringTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAzurermExpressRouteCircuitPeeringTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts">DataAzurermExpressRouteCircuitPeeringTimeouts</a>

---



