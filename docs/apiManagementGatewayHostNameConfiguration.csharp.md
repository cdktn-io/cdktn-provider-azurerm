# `apiManagementGatewayHostNameConfiguration` Submodule <a name="`apiManagementGatewayHostNameConfiguration` Submodule" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementGatewayHostNameConfiguration <a name="ApiManagementGatewayHostNameConfiguration" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration azurerm_api_management_gateway_host_name_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ApiManagementGatewayHostNameConfiguration(Construct Scope, string Id, ApiManagementGatewayHostNameConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig">ApiManagementGatewayHostNameConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig">ApiManagementGatewayHostNameConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetHttp2Enabled">ResetHttp2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetRequestClientCertificateEnabled">ResetRequestClientCertificateEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetTls10Enabled">ResetTls10Enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetTls11Enabled">ResetTls11Enabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.putTimeouts"></a>

```csharp
private void PutTimeouts(ApiManagementGatewayHostNameConfigurationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts">ApiManagementGatewayHostNameConfigurationTimeouts</a>

---

##### `ResetHttp2Enabled` <a name="ResetHttp2Enabled" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetHttp2Enabled"></a>

```csharp
private void ResetHttp2Enabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRequestClientCertificateEnabled` <a name="ResetRequestClientCertificateEnabled" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetRequestClientCertificateEnabled"></a>

```csharp
private void ResetRequestClientCertificateEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTls10Enabled` <a name="ResetTls10Enabled" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetTls10Enabled"></a>

```csharp
private void ResetTls10Enabled()
```

##### `ResetTls11Enabled` <a name="ResetTls11Enabled" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetTls11Enabled"></a>

```csharp
private void ResetTls11Enabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApiManagementGatewayHostNameConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ApiManagementGatewayHostNameConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ApiManagementGatewayHostNameConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ApiManagementGatewayHostNameConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ApiManagementGatewayHostNameConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApiManagementGatewayHostNameConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiManagementGatewayHostNameConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiManagementGatewayHostNameConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApiManagementGatewayHostNameConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference">ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.apiManagementIdInput">ApiManagementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.certificateIdInput">CertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.gatewayNameInput">GatewayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.hostNameInput">HostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.http2EnabledInput">Http2EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.requestClientCertificateEnabledInput">RequestClientCertificateEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts">ApiManagementGatewayHostNameConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls10EnabledInput">Tls10EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls11EnabledInput">Tls11EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.apiManagementId">ApiManagementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.gatewayName">GatewayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.http2Enabled">Http2Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.requestClientCertificateEnabled">RequestClientCertificateEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls10Enabled">Tls10Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls11Enabled">Tls11Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.timeouts"></a>

```csharp
public ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference">ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference</a>

---

##### `ApiManagementIdInput`<sup>Optional</sup> <a name="ApiManagementIdInput" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.apiManagementIdInput"></a>

```csharp
public string ApiManagementIdInput { get; }
```

- *Type:* string

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.certificateIdInput"></a>

```csharp
public string CertificateIdInput { get; }
```

- *Type:* string

---

##### `GatewayNameInput`<sup>Optional</sup> <a name="GatewayNameInput" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.gatewayNameInput"></a>

```csharp
public string GatewayNameInput { get; }
```

- *Type:* string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.hostNameInput"></a>

```csharp
public string HostNameInput { get; }
```

- *Type:* string

---

##### `Http2EnabledInput`<sup>Optional</sup> <a name="Http2EnabledInput" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.http2EnabledInput"></a>

```csharp
public bool|IResolvable Http2EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RequestClientCertificateEnabledInput`<sup>Optional</sup> <a name="RequestClientCertificateEnabledInput" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.requestClientCertificateEnabledInput"></a>

```csharp
public bool|IResolvable RequestClientCertificateEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.timeoutsInput"></a>

```csharp
public IResolvable|ApiManagementGatewayHostNameConfigurationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts">ApiManagementGatewayHostNameConfigurationTimeouts</a>

---

##### `Tls10EnabledInput`<sup>Optional</sup> <a name="Tls10EnabledInput" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls10EnabledInput"></a>

```csharp
public bool|IResolvable Tls10EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Tls11EnabledInput`<sup>Optional</sup> <a name="Tls11EnabledInput" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls11EnabledInput"></a>

```csharp
public bool|IResolvable Tls11EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ApiManagementId`<sup>Required</sup> <a name="ApiManagementId" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.apiManagementId"></a>

```csharp
public string ApiManagementId { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `GatewayName`<sup>Required</sup> <a name="GatewayName" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.gatewayName"></a>

```csharp
public string GatewayName { get; }
```

- *Type:* string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `Http2Enabled`<sup>Required</sup> <a name="Http2Enabled" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.http2Enabled"></a>

```csharp
public bool|IResolvable Http2Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RequestClientCertificateEnabled`<sup>Required</sup> <a name="RequestClientCertificateEnabled" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.requestClientCertificateEnabled"></a>

```csharp
public bool|IResolvable RequestClientCertificateEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Tls10Enabled`<sup>Required</sup> <a name="Tls10Enabled" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls10Enabled"></a>

```csharp
public bool|IResolvable Tls10Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Tls11Enabled`<sup>Required</sup> <a name="Tls11Enabled" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls11Enabled"></a>

```csharp
public bool|IResolvable Tls11Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementGatewayHostNameConfigurationConfig <a name="ApiManagementGatewayHostNameConfigurationConfig" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ApiManagementGatewayHostNameConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApiManagementId,
    string CertificateId,
    string GatewayName,
    string HostName,
    string Name,
    bool|IResolvable Http2Enabled = null,
    string Id = null,
    bool|IResolvable RequestClientCertificateEnabled = null,
    ApiManagementGatewayHostNameConfigurationTimeouts Timeouts = null,
    bool|IResolvable Tls10Enabled = null,
    bool|IResolvable Tls11Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.apiManagementId">ApiManagementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#api_management_id ApiManagementGatewayHostNameConfiguration#api_management_id}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.certificateId">CertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#certificate_id ApiManagementGatewayHostNameConfiguration#certificate_id}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.gatewayName">GatewayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#gateway_name ApiManagementGatewayHostNameConfiguration#gateway_name}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.hostName">HostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#host_name ApiManagementGatewayHostNameConfiguration#host_name}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#name ApiManagementGatewayHostNameConfiguration#name}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.http2Enabled">Http2Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#http2_enabled ApiManagementGatewayHostNameConfiguration#http2_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#id ApiManagementGatewayHostNameConfiguration#id}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.requestClientCertificateEnabled">RequestClientCertificateEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#request_client_certificate_enabled ApiManagementGatewayHostNameConfiguration#request_client_certificate_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts">ApiManagementGatewayHostNameConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.tls10Enabled">Tls10Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#tls10_enabled ApiManagementGatewayHostNameConfiguration#tls10_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.tls11Enabled">Tls11Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#tls11_enabled ApiManagementGatewayHostNameConfiguration#tls11_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiManagementId`<sup>Required</sup> <a name="ApiManagementId" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.apiManagementId"></a>

```csharp
public string ApiManagementId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#api_management_id ApiManagementGatewayHostNameConfiguration#api_management_id}.

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.certificateId"></a>

```csharp
public string CertificateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#certificate_id ApiManagementGatewayHostNameConfiguration#certificate_id}.

---

##### `GatewayName`<sup>Required</sup> <a name="GatewayName" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.gatewayName"></a>

```csharp
public string GatewayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#gateway_name ApiManagementGatewayHostNameConfiguration#gateway_name}.

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.hostName"></a>

```csharp
public string HostName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#host_name ApiManagementGatewayHostNameConfiguration#host_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#name ApiManagementGatewayHostNameConfiguration#name}.

---

##### `Http2Enabled`<sup>Optional</sup> <a name="Http2Enabled" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.http2Enabled"></a>

```csharp
public bool|IResolvable Http2Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#http2_enabled ApiManagementGatewayHostNameConfiguration#http2_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#id ApiManagementGatewayHostNameConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RequestClientCertificateEnabled`<sup>Optional</sup> <a name="RequestClientCertificateEnabled" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.requestClientCertificateEnabled"></a>

```csharp
public bool|IResolvable RequestClientCertificateEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#request_client_certificate_enabled ApiManagementGatewayHostNameConfiguration#request_client_certificate_enabled}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.timeouts"></a>

```csharp
public ApiManagementGatewayHostNameConfigurationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts">ApiManagementGatewayHostNameConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#timeouts ApiManagementGatewayHostNameConfiguration#timeouts}

---

##### `Tls10Enabled`<sup>Optional</sup> <a name="Tls10Enabled" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.tls10Enabled"></a>

```csharp
public bool|IResolvable Tls10Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#tls10_enabled ApiManagementGatewayHostNameConfiguration#tls10_enabled}.

---

##### `Tls11Enabled`<sup>Optional</sup> <a name="Tls11Enabled" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.tls11Enabled"></a>

```csharp
public bool|IResolvable Tls11Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#tls11_enabled ApiManagementGatewayHostNameConfiguration#tls11_enabled}.

---

### ApiManagementGatewayHostNameConfigurationTimeouts <a name="ApiManagementGatewayHostNameConfigurationTimeouts" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ApiManagementGatewayHostNameConfigurationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#create ApiManagementGatewayHostNameConfiguration#create}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#delete ApiManagementGatewayHostNameConfiguration#delete}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#read ApiManagementGatewayHostNameConfiguration#read}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#update ApiManagementGatewayHostNameConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#create ApiManagementGatewayHostNameConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#delete ApiManagementGatewayHostNameConfiguration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#read ApiManagementGatewayHostNameConfiguration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/api_management_gateway_host_name_configuration#update ApiManagementGatewayHostNameConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference <a name="ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts">ApiManagementGatewayHostNameConfigurationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiManagementGatewayHostNameConfigurationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts">ApiManagementGatewayHostNameConfigurationTimeouts</a>

---



