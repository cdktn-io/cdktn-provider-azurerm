# `dataAzurermStorageAccountBlobContainerSas` Submodule <a name="`dataAzurermStorageAccountBlobContainerSas` Submodule" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermStorageAccountBlobContainerSas <a name="DataAzurermStorageAccountBlobContainerSas" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas azurerm_storage_account_blob_container_sas}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermStorageAccountBlobContainerSas(Construct Scope, string Id, DataAzurermStorageAccountBlobContainerSasConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig">DataAzurermStorageAccountBlobContainerSasConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig">DataAzurermStorageAccountBlobContainerSasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putPermissions">PutPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetCacheControl">ResetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetContentDisposition">ResetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetContentEncoding">ResetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetContentLanguage">ResetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetHttpsOnly">ResetHttpsOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutPermissions` <a name="PutPermissions" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putPermissions"></a>

```csharp
private void PutPermissions(DataAzurermStorageAccountBlobContainerSasPermissions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putPermissions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions">DataAzurermStorageAccountBlobContainerSasPermissions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermStorageAccountBlobContainerSasTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts">DataAzurermStorageAccountBlobContainerSasTimeouts</a>

---

##### `ResetCacheControl` <a name="ResetCacheControl" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetCacheControl"></a>

```csharp
private void ResetCacheControl()
```

##### `ResetContentDisposition` <a name="ResetContentDisposition" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetContentDisposition"></a>

```csharp
private void ResetContentDisposition()
```

##### `ResetContentEncoding` <a name="ResetContentEncoding" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetContentEncoding"></a>

```csharp
private void ResetContentEncoding()
```

##### `ResetContentLanguage` <a name="ResetContentLanguage" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetContentLanguage"></a>

```csharp
private void ResetContentLanguage()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetContentType"></a>

```csharp
private void ResetContentType()
```

##### `ResetHttpsOnly` <a name="ResetHttpsOnly" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetHttpsOnly"></a>

```csharp
private void ResetHttpsOnly()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetPermissions"></a>

```csharp
private void ResetPermissions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermStorageAccountBlobContainerSas resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermStorageAccountBlobContainerSas.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermStorageAccountBlobContainerSas.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermStorageAccountBlobContainerSas.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DataAzurermStorageAccountBlobContainerSas.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAzurermStorageAccountBlobContainerSas resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermStorageAccountBlobContainerSas to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermStorageAccountBlobContainerSas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermStorageAccountBlobContainerSas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.permissions">Permissions</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference">DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.sas">Sas</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference">DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.cacheControlInput">CacheControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.connectionStringInput">ConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.containerNameInput">ContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentDispositionInput">ContentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentEncodingInput">ContentEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentLanguageInput">ContentLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.expiryInput">ExpiryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.httpsOnlyInput">HttpsOnlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.permissionsInput">PermissionsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions">DataAzurermStorageAccountBlobContainerSasPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.startInput">StartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts">DataAzurermStorageAccountBlobContainerSasTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.cacheControl">CacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.connectionString">ConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.containerName">ContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentDisposition">ContentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentEncoding">ContentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentLanguage">ContentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.expiry">Expiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.httpsOnly">HttpsOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.start">Start</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.permissions"></a>

```csharp
public DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference Permissions { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference">DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference</a>

---

##### `Sas`<sup>Required</sup> <a name="Sas" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.sas"></a>

```csharp
public string Sas { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.timeouts"></a>

```csharp
public DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference">DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference</a>

---

##### `CacheControlInput`<sup>Optional</sup> <a name="CacheControlInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.cacheControlInput"></a>

```csharp
public string CacheControlInput { get; }
```

- *Type:* string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.connectionStringInput"></a>

```csharp
public string ConnectionStringInput { get; }
```

- *Type:* string

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.containerNameInput"></a>

```csharp
public string ContainerNameInput { get; }
```

- *Type:* string

---

##### `ContentDispositionInput`<sup>Optional</sup> <a name="ContentDispositionInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentDispositionInput"></a>

```csharp
public string ContentDispositionInput { get; }
```

- *Type:* string

---

##### `ContentEncodingInput`<sup>Optional</sup> <a name="ContentEncodingInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentEncodingInput"></a>

```csharp
public string ContentEncodingInput { get; }
```

- *Type:* string

---

##### `ContentLanguageInput`<sup>Optional</sup> <a name="ContentLanguageInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentLanguageInput"></a>

```csharp
public string ContentLanguageInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `ExpiryInput`<sup>Optional</sup> <a name="ExpiryInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.expiryInput"></a>

```csharp
public string ExpiryInput { get; }
```

- *Type:* string

---

##### `HttpsOnlyInput`<sup>Optional</sup> <a name="HttpsOnlyInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.httpsOnlyInput"></a>

```csharp
public bool|IResolvable HttpsOnlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.permissionsInput"></a>

```csharp
public DataAzurermStorageAccountBlobContainerSasPermissions PermissionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions">DataAzurermStorageAccountBlobContainerSasPermissions</a>

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.startInput"></a>

```csharp
public string StartInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAzurermStorageAccountBlobContainerSasTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts">DataAzurermStorageAccountBlobContainerSasTimeouts</a>

---

##### `CacheControl`<sup>Required</sup> <a name="CacheControl" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.cacheControl"></a>

```csharp
public string CacheControl { get; }
```

- *Type:* string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.connectionString"></a>

```csharp
public string ConnectionString { get; }
```

- *Type:* string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.containerName"></a>

```csharp
public string ContainerName { get; }
```

- *Type:* string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentDisposition"></a>

```csharp
public string ContentDisposition { get; }
```

- *Type:* string

---

##### `ContentEncoding`<sup>Required</sup> <a name="ContentEncoding" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentEncoding"></a>

```csharp
public string ContentEncoding { get; }
```

- *Type:* string

---

##### `ContentLanguage`<sup>Required</sup> <a name="ContentLanguage" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentLanguage"></a>

```csharp
public string ContentLanguage { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.expiry"></a>

```csharp
public string Expiry { get; }
```

- *Type:* string

---

##### `HttpsOnly`<sup>Required</sup> <a name="HttpsOnly" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.httpsOnly"></a>

```csharp
public bool|IResolvable HttpsOnly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.start"></a>

```csharp
public string Start { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSas.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermStorageAccountBlobContainerSasConfig <a name="DataAzurermStorageAccountBlobContainerSasConfig" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermStorageAccountBlobContainerSasConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ConnectionString,
    string ContainerName,
    string Expiry,
    string Start,
    string CacheControl = null,
    string ContentDisposition = null,
    string ContentEncoding = null,
    string ContentLanguage = null,
    string ContentType = null,
    bool|IResolvable HttpsOnly = null,
    string Id = null,
    string IpAddress = null,
    DataAzurermStorageAccountBlobContainerSasPermissions Permissions = null,
    DataAzurermStorageAccountBlobContainerSasTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.connectionString">ConnectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#connection_string DataAzurermStorageAccountBlobContainerSas#connection_string}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.containerName">ContainerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#container_name DataAzurermStorageAccountBlobContainerSas#container_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.expiry">Expiry</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#expiry DataAzurermStorageAccountBlobContainerSas#expiry}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.start">Start</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#start DataAzurermStorageAccountBlobContainerSas#start}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.cacheControl">CacheControl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#cache_control DataAzurermStorageAccountBlobContainerSas#cache_control}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.contentDisposition">ContentDisposition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#content_disposition DataAzurermStorageAccountBlobContainerSas#content_disposition}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.contentEncoding">ContentEncoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#content_encoding DataAzurermStorageAccountBlobContainerSas#content_encoding}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.contentLanguage">ContentLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#content_language DataAzurermStorageAccountBlobContainerSas#content_language}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#content_type DataAzurermStorageAccountBlobContainerSas#content_type}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.httpsOnly">HttpsOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#https_only DataAzurermStorageAccountBlobContainerSas#https_only}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#id DataAzurermStorageAccountBlobContainerSas#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.ipAddress">IpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#ip_address DataAzurermStorageAccountBlobContainerSas#ip_address}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.permissions">Permissions</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions">DataAzurermStorageAccountBlobContainerSasPermissions</a></code> | permissions block. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts">DataAzurermStorageAccountBlobContainerSasTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.connectionString"></a>

```csharp
public string ConnectionString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#connection_string DataAzurermStorageAccountBlobContainerSas#connection_string}.

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.containerName"></a>

```csharp
public string ContainerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#container_name DataAzurermStorageAccountBlobContainerSas#container_name}.

---

##### `Expiry`<sup>Required</sup> <a name="Expiry" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.expiry"></a>

```csharp
public string Expiry { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#expiry DataAzurermStorageAccountBlobContainerSas#expiry}.

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.start"></a>

```csharp
public string Start { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#start DataAzurermStorageAccountBlobContainerSas#start}.

---

##### `CacheControl`<sup>Optional</sup> <a name="CacheControl" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.cacheControl"></a>

```csharp
public string CacheControl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#cache_control DataAzurermStorageAccountBlobContainerSas#cache_control}.

---

##### `ContentDisposition`<sup>Optional</sup> <a name="ContentDisposition" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.contentDisposition"></a>

```csharp
public string ContentDisposition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#content_disposition DataAzurermStorageAccountBlobContainerSas#content_disposition}.

---

##### `ContentEncoding`<sup>Optional</sup> <a name="ContentEncoding" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.contentEncoding"></a>

```csharp
public string ContentEncoding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#content_encoding DataAzurermStorageAccountBlobContainerSas#content_encoding}.

---

##### `ContentLanguage`<sup>Optional</sup> <a name="ContentLanguage" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.contentLanguage"></a>

```csharp
public string ContentLanguage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#content_language DataAzurermStorageAccountBlobContainerSas#content_language}.

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#content_type DataAzurermStorageAccountBlobContainerSas#content_type}.

---

##### `HttpsOnly`<sup>Optional</sup> <a name="HttpsOnly" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.httpsOnly"></a>

```csharp
public bool|IResolvable HttpsOnly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#https_only DataAzurermStorageAccountBlobContainerSas#https_only}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#id DataAzurermStorageAccountBlobContainerSas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#ip_address DataAzurermStorageAccountBlobContainerSas#ip_address}.

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.permissions"></a>

```csharp
public DataAzurermStorageAccountBlobContainerSasPermissions Permissions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions">DataAzurermStorageAccountBlobContainerSasPermissions</a>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#permissions DataAzurermStorageAccountBlobContainerSas#permissions}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasConfig.property.timeouts"></a>

```csharp
public DataAzurermStorageAccountBlobContainerSasTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts">DataAzurermStorageAccountBlobContainerSasTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#timeouts DataAzurermStorageAccountBlobContainerSas#timeouts}

---

### DataAzurermStorageAccountBlobContainerSasPermissions <a name="DataAzurermStorageAccountBlobContainerSasPermissions" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermStorageAccountBlobContainerSasPermissions {
    bool|IResolvable Add = null,
    bool|IResolvable Create = null,
    bool|IResolvable Delete = null,
    bool|IResolvable DeleteVersion = null,
    bool|IResolvable Execute = null,
    bool|IResolvable Find = null,
    bool|IResolvable List = null,
    bool|IResolvable Move = null,
    bool|IResolvable Ownership = null,
    bool|IResolvable Permissions = null,
    bool|IResolvable Read = null,
    bool|IResolvable SetImmutabilityPolicy = null,
    bool|IResolvable Tags = null,
    bool|IResolvable Write = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.add">Add</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#add DataAzurermStorageAccountBlobContainerSas#add}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.create">Create</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#create DataAzurermStorageAccountBlobContainerSas#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.delete">Delete</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#delete DataAzurermStorageAccountBlobContainerSas#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.deleteVersion">DeleteVersion</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#delete_version DataAzurermStorageAccountBlobContainerSas#delete_version}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.execute">Execute</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#execute DataAzurermStorageAccountBlobContainerSas#execute}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.find">Find</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#find DataAzurermStorageAccountBlobContainerSas#find}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.list">List</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#list DataAzurermStorageAccountBlobContainerSas#list}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.move">Move</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#move DataAzurermStorageAccountBlobContainerSas#move}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.ownership">Ownership</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#ownership DataAzurermStorageAccountBlobContainerSas#ownership}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.permissions">Permissions</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#permissions DataAzurermStorageAccountBlobContainerSas#permissions}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.read">Read</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#read DataAzurermStorageAccountBlobContainerSas#read}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.setImmutabilityPolicy">SetImmutabilityPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#set_immutability_policy DataAzurermStorageAccountBlobContainerSas#set_immutability_policy}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.tags">Tags</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#tags DataAzurermStorageAccountBlobContainerSas#tags}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.write">Write</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#write DataAzurermStorageAccountBlobContainerSas#write}. |

---

##### `Add`<sup>Optional</sup> <a name="Add" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.add"></a>

```csharp
public bool|IResolvable Add { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#add DataAzurermStorageAccountBlobContainerSas#add}.

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.create"></a>

```csharp
public bool|IResolvable Create { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#create DataAzurermStorageAccountBlobContainerSas#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.delete"></a>

```csharp
public bool|IResolvable Delete { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#delete DataAzurermStorageAccountBlobContainerSas#delete}.

---

##### `DeleteVersion`<sup>Optional</sup> <a name="DeleteVersion" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.deleteVersion"></a>

```csharp
public bool|IResolvable DeleteVersion { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#delete_version DataAzurermStorageAccountBlobContainerSas#delete_version}.

---

##### `Execute`<sup>Optional</sup> <a name="Execute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.execute"></a>

```csharp
public bool|IResolvable Execute { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#execute DataAzurermStorageAccountBlobContainerSas#execute}.

---

##### `Find`<sup>Optional</sup> <a name="Find" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.find"></a>

```csharp
public bool|IResolvable Find { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#find DataAzurermStorageAccountBlobContainerSas#find}.

---

##### `List`<sup>Optional</sup> <a name="List" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.list"></a>

```csharp
public bool|IResolvable List { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#list DataAzurermStorageAccountBlobContainerSas#list}.

---

##### `Move`<sup>Optional</sup> <a name="Move" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.move"></a>

```csharp
public bool|IResolvable Move { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#move DataAzurermStorageAccountBlobContainerSas#move}.

---

##### `Ownership`<sup>Optional</sup> <a name="Ownership" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.ownership"></a>

```csharp
public bool|IResolvable Ownership { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#ownership DataAzurermStorageAccountBlobContainerSas#ownership}.

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.permissions"></a>

```csharp
public bool|IResolvable Permissions { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#permissions DataAzurermStorageAccountBlobContainerSas#permissions}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.read"></a>

```csharp
public bool|IResolvable Read { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#read DataAzurermStorageAccountBlobContainerSas#read}.

---

##### `SetImmutabilityPolicy`<sup>Optional</sup> <a name="SetImmutabilityPolicy" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.setImmutabilityPolicy"></a>

```csharp
public bool|IResolvable SetImmutabilityPolicy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#set_immutability_policy DataAzurermStorageAccountBlobContainerSas#set_immutability_policy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.tags"></a>

```csharp
public bool|IResolvable Tags { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#tags DataAzurermStorageAccountBlobContainerSas#tags}.

---

##### `Write`<sup>Optional</sup> <a name="Write" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions.property.write"></a>

```csharp
public bool|IResolvable Write { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#write DataAzurermStorageAccountBlobContainerSas#write}.

---

### DataAzurermStorageAccountBlobContainerSasTimeouts <a name="DataAzurermStorageAccountBlobContainerSasTimeouts" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermStorageAccountBlobContainerSasTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#read DataAzurermStorageAccountBlobContainerSas#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/storage_account_blob_container_sas#read DataAzurermStorageAccountBlobContainerSas#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference <a name="DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetAdd">ResetAdd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetDeleteVersion">ResetDeleteVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetExecute">ResetExecute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetFind">ResetFind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetList">ResetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetMove">ResetMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetOwnership">ResetOwnership</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetSetImmutabilityPolicy">ResetSetImmutabilityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetWrite">ResetWrite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdd` <a name="ResetAdd" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetAdd"></a>

```csharp
private void ResetAdd()
```

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetDeleteVersion` <a name="ResetDeleteVersion" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetDeleteVersion"></a>

```csharp
private void ResetDeleteVersion()
```

##### `ResetExecute` <a name="ResetExecute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetExecute"></a>

```csharp
private void ResetExecute()
```

##### `ResetFind` <a name="ResetFind" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetFind"></a>

```csharp
private void ResetFind()
```

##### `ResetList` <a name="ResetList" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetList"></a>

```csharp
private void ResetList()
```

##### `ResetMove` <a name="ResetMove" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetMove"></a>

```csharp
private void ResetMove()
```

##### `ResetOwnership` <a name="ResetOwnership" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetOwnership"></a>

```csharp
private void ResetOwnership()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetPermissions"></a>

```csharp
private void ResetPermissions()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetSetImmutabilityPolicy` <a name="ResetSetImmutabilityPolicy" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetSetImmutabilityPolicy"></a>

```csharp
private void ResetSetImmutabilityPolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetWrite` <a name="ResetWrite" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.resetWrite"></a>

```csharp
private void ResetWrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.addInput">AddInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.createInput">CreateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.deleteVersionInput">DeleteVersionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.executeInput">ExecuteInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.findInput">FindInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.listInput">ListInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.moveInput">MoveInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.ownershipInput">OwnershipInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.readInput">ReadInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.setImmutabilityPolicyInput">SetImmutabilityPolicyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.tagsInput">TagsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.writeInput">WriteInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.add">Add</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.create">Create</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.delete">Delete</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.deleteVersion">DeleteVersion</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.execute">Execute</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.find">Find</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.list">List</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.move">Move</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.ownership">Ownership</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.permissions">Permissions</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.read">Read</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.setImmutabilityPolicy">SetImmutabilityPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.tags">Tags</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.write">Write</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions">DataAzurermStorageAccountBlobContainerSasPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddInput`<sup>Optional</sup> <a name="AddInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.addInput"></a>

```csharp
public bool|IResolvable AddInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.createInput"></a>

```csharp
public bool|IResolvable CreateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.deleteInput"></a>

```csharp
public bool|IResolvable DeleteInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeleteVersionInput`<sup>Optional</sup> <a name="DeleteVersionInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.deleteVersionInput"></a>

```csharp
public bool|IResolvable DeleteVersionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExecuteInput`<sup>Optional</sup> <a name="ExecuteInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.executeInput"></a>

```csharp
public bool|IResolvable ExecuteInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FindInput`<sup>Optional</sup> <a name="FindInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.findInput"></a>

```csharp
public bool|IResolvable FindInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ListInput`<sup>Optional</sup> <a name="ListInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.listInput"></a>

```csharp
public bool|IResolvable ListInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MoveInput`<sup>Optional</sup> <a name="MoveInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.moveInput"></a>

```csharp
public bool|IResolvable MoveInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OwnershipInput`<sup>Optional</sup> <a name="OwnershipInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.ownershipInput"></a>

```csharp
public bool|IResolvable OwnershipInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.permissionsInput"></a>

```csharp
public bool|IResolvable PermissionsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.readInput"></a>

```csharp
public bool|IResolvable ReadInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SetImmutabilityPolicyInput`<sup>Optional</sup> <a name="SetImmutabilityPolicyInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.setImmutabilityPolicyInput"></a>

```csharp
public bool|IResolvable SetImmutabilityPolicyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.tagsInput"></a>

```csharp
public bool|IResolvable TagsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WriteInput`<sup>Optional</sup> <a name="WriteInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.writeInput"></a>

```csharp
public bool|IResolvable WriteInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Add`<sup>Required</sup> <a name="Add" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.add"></a>

```csharp
public bool|IResolvable Add { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.create"></a>

```csharp
public bool|IResolvable Create { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.delete"></a>

```csharp
public bool|IResolvable Delete { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeleteVersion`<sup>Required</sup> <a name="DeleteVersion" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.deleteVersion"></a>

```csharp
public bool|IResolvable DeleteVersion { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Execute`<sup>Required</sup> <a name="Execute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.execute"></a>

```csharp
public bool|IResolvable Execute { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Find`<sup>Required</sup> <a name="Find" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.find"></a>

```csharp
public bool|IResolvable Find { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `List`<sup>Required</sup> <a name="List" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.list"></a>

```csharp
public bool|IResolvable List { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Move`<sup>Required</sup> <a name="Move" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.move"></a>

```csharp
public bool|IResolvable Move { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Ownership`<sup>Required</sup> <a name="Ownership" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.ownership"></a>

```csharp
public bool|IResolvable Ownership { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.permissions"></a>

```csharp
public bool|IResolvable Permissions { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.read"></a>

```csharp
public bool|IResolvable Read { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SetImmutabilityPolicy`<sup>Required</sup> <a name="SetImmutabilityPolicy" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.setImmutabilityPolicy"></a>

```csharp
public bool|IResolvable SetImmutabilityPolicy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.tags"></a>

```csharp
public bool|IResolvable Tags { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.write"></a>

```csharp
public bool|IResolvable Write { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissionsOutputReference.property.internalValue"></a>

```csharp
public DataAzurermStorageAccountBlobContainerSasPermissions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasPermissions">DataAzurermStorageAccountBlobContainerSasPermissions</a>

---


### DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference <a name="DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts">DataAzurermStorageAccountBlobContainerSasTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAzurermStorageAccountBlobContainerSasTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountBlobContainerSas.DataAzurermStorageAccountBlobContainerSasTimeouts">DataAzurermStorageAccountBlobContainerSasTimeouts</a>

---



