# `dataAzurermServicebusNamespaceDisasterRecoveryConfig` Submodule <a name="`dataAzurermServicebusNamespaceDisasterRecoveryConfig` Submodule" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermServicebusNamespaceDisasterRecoveryConfig <a name="DataAzurermServicebusNamespaceDisasterRecoveryConfig" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/servicebus_namespace_disaster_recovery_config azurerm_servicebus_namespace_disaster_recovery_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermServicebusNamespaceDisasterRecoveryConfig(Construct Scope, string Id, DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig">DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig">DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetAliasAuthorizationRuleId">ResetAliasAuthorizationRuleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetNamespaceId">ResetNamespaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetNamespaceName">ResetNamespaceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetResourceGroupName">ResetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts</a>

---

##### `ResetAliasAuthorizationRuleId` <a name="ResetAliasAuthorizationRuleId" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetAliasAuthorizationRuleId"></a>

```csharp
private void ResetAliasAuthorizationRuleId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespaceId` <a name="ResetNamespaceId" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetNamespaceId"></a>

```csharp
private void ResetNamespaceId()
```

##### `ResetNamespaceName` <a name="ResetNamespaceName" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetNamespaceName"></a>

```csharp
private void ResetNamespaceName()
```

##### `ResetResourceGroupName` <a name="ResetResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetResourceGroupName"></a>

```csharp
private void ResetResourceGroupName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermServicebusNamespaceDisasterRecoveryConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermServicebusNamespaceDisasterRecoveryConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermServicebusNamespaceDisasterRecoveryConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermServicebusNamespaceDisasterRecoveryConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermServicebusNamespaceDisasterRecoveryConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAzurermServicebusNamespaceDisasterRecoveryConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermServicebusNamespaceDisasterRecoveryConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermServicebusNamespaceDisasterRecoveryConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermServicebusNamespaceDisasterRecoveryConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.defaultPrimaryKey">DefaultPrimaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.defaultSecondaryKey">DefaultSecondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.partnerNamespaceId">PartnerNamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.primaryConnectionStringAlias">PrimaryConnectionStringAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.secondaryConnectionStringAlias">SecondaryConnectionStringAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.aliasAuthorizationRuleIdInput">AliasAuthorizationRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.namespaceNameInput">NamespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.aliasAuthorizationRuleId">AliasAuthorizationRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.namespaceId">NamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.namespaceName">NamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DefaultPrimaryKey`<sup>Required</sup> <a name="DefaultPrimaryKey" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.defaultPrimaryKey"></a>

```csharp
public string DefaultPrimaryKey { get; }
```

- *Type:* string

---

##### `DefaultSecondaryKey`<sup>Required</sup> <a name="DefaultSecondaryKey" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.defaultSecondaryKey"></a>

```csharp
public string DefaultSecondaryKey { get; }
```

- *Type:* string

---

##### `PartnerNamespaceId`<sup>Required</sup> <a name="PartnerNamespaceId" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.partnerNamespaceId"></a>

```csharp
public string PartnerNamespaceId { get; }
```

- *Type:* string

---

##### `PrimaryConnectionStringAlias`<sup>Required</sup> <a name="PrimaryConnectionStringAlias" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.primaryConnectionStringAlias"></a>

```csharp
public string PrimaryConnectionStringAlias { get; }
```

- *Type:* string

---

##### `SecondaryConnectionStringAlias`<sup>Required</sup> <a name="SecondaryConnectionStringAlias" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.secondaryConnectionStringAlias"></a>

```csharp
public string SecondaryConnectionStringAlias { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.timeouts"></a>

```csharp
public DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference</a>

---

##### `AliasAuthorizationRuleIdInput`<sup>Optional</sup> <a name="AliasAuthorizationRuleIdInput" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.aliasAuthorizationRuleIdInput"></a>

```csharp
public string AliasAuthorizationRuleIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.namespaceIdInput"></a>

```csharp
public string NamespaceIdInput { get; }
```

- *Type:* string

---

##### `NamespaceNameInput`<sup>Optional</sup> <a name="NamespaceNameInput" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.namespaceNameInput"></a>

```csharp
public string NamespaceNameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts</a>

---

##### `AliasAuthorizationRuleId`<sup>Required</sup> <a name="AliasAuthorizationRuleId" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.aliasAuthorizationRuleId"></a>

```csharp
public string AliasAuthorizationRuleId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.namespaceId"></a>

```csharp
public string NamespaceId { get; }
```

- *Type:* string

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.namespaceName"></a>

```csharp
public string NamespaceName { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig <a name="DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string AliasAuthorizationRuleId = null,
    string Id = null,
    string NamespaceId = null,
    string NamespaceName = null,
    string ResourceGroupName = null,
    DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#name DataAzurermServicebusNamespaceDisasterRecoveryConfig#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.aliasAuthorizationRuleId">AliasAuthorizationRuleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#alias_authorization_rule_id DataAzurermServicebusNamespaceDisasterRecoveryConfig#alias_authorization_rule_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#id DataAzurermServicebusNamespaceDisasterRecoveryConfig#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.namespaceId">NamespaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#namespace_id DataAzurermServicebusNamespaceDisasterRecoveryConfig#namespace_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.namespaceName">NamespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#namespace_name DataAzurermServicebusNamespaceDisasterRecoveryConfig#namespace_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#resource_group_name DataAzurermServicebusNamespaceDisasterRecoveryConfig#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#name DataAzurermServicebusNamespaceDisasterRecoveryConfig#name}.

---

##### `AliasAuthorizationRuleId`<sup>Optional</sup> <a name="AliasAuthorizationRuleId" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.aliasAuthorizationRuleId"></a>

```csharp
public string AliasAuthorizationRuleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#alias_authorization_rule_id DataAzurermServicebusNamespaceDisasterRecoveryConfig#alias_authorization_rule_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#id DataAzurermServicebusNamespaceDisasterRecoveryConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NamespaceId`<sup>Optional</sup> <a name="NamespaceId" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.namespaceId"></a>

```csharp
public string NamespaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#namespace_id DataAzurermServicebusNamespaceDisasterRecoveryConfig#namespace_id}.

---

##### `NamespaceName`<sup>Optional</sup> <a name="NamespaceName" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.namespaceName"></a>

```csharp
public string NamespaceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#namespace_name DataAzurermServicebusNamespaceDisasterRecoveryConfig#namespace_name}.

---

##### `ResourceGroupName`<sup>Optional</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#resource_group_name DataAzurermServicebusNamespaceDisasterRecoveryConfig#resource_group_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.timeouts"></a>

```csharp
public DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#timeouts DataAzurermServicebusNamespaceDisasterRecoveryConfig#timeouts}

---

### DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts <a name="DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#read DataAzurermServicebusNamespaceDisasterRecoveryConfig#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#read DataAzurermServicebusNamespaceDisasterRecoveryConfig#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference <a name="DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts</a>

---



