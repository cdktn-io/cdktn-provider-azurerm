# `dataAzurermNetappVolumeQuotaRule` Submodule <a name="`dataAzurermNetappVolumeQuotaRule` Submodule" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNetappVolumeQuotaRule <a name="DataAzurermNetappVolumeQuotaRule" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/netapp_volume_quota_rule azurerm_netapp_volume_quota_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermNetappVolumeQuotaRule(Construct Scope, string Id, DataAzurermNetappVolumeQuotaRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleConfig">DataAzurermNetappVolumeQuotaRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleConfig">DataAzurermNetappVolumeQuotaRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermNetappVolumeQuotaRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeouts">DataAzurermNetappVolumeQuotaRuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermNetappVolumeQuotaRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermNetappVolumeQuotaRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermNetappVolumeQuotaRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermNetappVolumeQuotaRule.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermNetappVolumeQuotaRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAzurermNetappVolumeQuotaRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermNetappVolumeQuotaRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermNetappVolumeQuotaRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/netapp_volume_quota_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermNetappVolumeQuotaRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.quotaSizeInKib">QuotaSizeInKib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.quotaTarget">QuotaTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.quotaType">QuotaType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference">DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeouts">DataAzurermNetappVolumeQuotaRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.volumeIdInput">VolumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.volumeId">VolumeId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `QuotaSizeInKib`<sup>Required</sup> <a name="QuotaSizeInKib" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.quotaSizeInKib"></a>

```csharp
public double QuotaSizeInKib { get; }
```

- *Type:* double

---

##### `QuotaTarget`<sup>Required</sup> <a name="QuotaTarget" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.quotaTarget"></a>

```csharp
public string QuotaTarget { get; }
```

- *Type:* string

---

##### `QuotaType`<sup>Required</sup> <a name="QuotaType" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.quotaType"></a>

```csharp
public string QuotaType { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.timeouts"></a>

```csharp
public DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference">DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAzurermNetappVolumeQuotaRuleTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeouts">DataAzurermNetappVolumeQuotaRuleTimeouts</a>

---

##### `VolumeIdInput`<sup>Optional</sup> <a name="VolumeIdInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.volumeIdInput"></a>

```csharp
public string VolumeIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.volumeId"></a>

```csharp
public string VolumeId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNetappVolumeQuotaRuleConfig <a name="DataAzurermNetappVolumeQuotaRuleConfig" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermNetappVolumeQuotaRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string VolumeId,
    string Id = null,
    DataAzurermNetappVolumeQuotaRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/netapp_volume_quota_rule#name DataAzurermNetappVolumeQuotaRule#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleConfig.property.volumeId">VolumeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/netapp_volume_quota_rule#volume_id DataAzurermNetappVolumeQuotaRule#volume_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/netapp_volume_quota_rule#id DataAzurermNetappVolumeQuotaRule#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeouts">DataAzurermNetappVolumeQuotaRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/netapp_volume_quota_rule#name DataAzurermNetappVolumeQuotaRule#name}.

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleConfig.property.volumeId"></a>

```csharp
public string VolumeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/netapp_volume_quota_rule#volume_id DataAzurermNetappVolumeQuotaRule#volume_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/netapp_volume_quota_rule#id DataAzurermNetappVolumeQuotaRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleConfig.property.timeouts"></a>

```csharp
public DataAzurermNetappVolumeQuotaRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeouts">DataAzurermNetappVolumeQuotaRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/netapp_volume_quota_rule#timeouts DataAzurermNetappVolumeQuotaRule#timeouts}

---

### DataAzurermNetappVolumeQuotaRuleTimeouts <a name="DataAzurermNetappVolumeQuotaRuleTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermNetappVolumeQuotaRuleTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/netapp_volume_quota_rule#read DataAzurermNetappVolumeQuotaRule#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/netapp_volume_quota_rule#read DataAzurermNetappVolumeQuotaRule#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference <a name="DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeouts">DataAzurermNetappVolumeQuotaRuleTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAzurermNetappVolumeQuotaRuleTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeQuotaRule.DataAzurermNetappVolumeQuotaRuleTimeouts">DataAzurermNetappVolumeQuotaRuleTimeouts</a>

---



