# `databricksVirtualNetworkPeering` Submodule <a name="`databricksVirtualNetworkPeering` Submodule" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabricksVirtualNetworkPeering <a name="DatabricksVirtualNetworkPeering" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering azurerm_databricks_virtual_network_peering}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DatabricksVirtualNetworkPeering(Construct Scope, string Id, DatabricksVirtualNetworkPeeringConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig">DatabricksVirtualNetworkPeeringConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig">DatabricksVirtualNetworkPeeringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowForwardedTraffic">ResetAllowForwardedTraffic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowGatewayTransit">ResetAllowGatewayTransit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowVirtualNetworkAccess">ResetAllowVirtualNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetUseRemoteGateways">ResetUseRemoteGateways</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabricksVirtualNetworkPeeringTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a>

---

##### `ResetAllowForwardedTraffic` <a name="ResetAllowForwardedTraffic" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowForwardedTraffic"></a>

```csharp
private void ResetAllowForwardedTraffic()
```

##### `ResetAllowGatewayTransit` <a name="ResetAllowGatewayTransit" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowGatewayTransit"></a>

```csharp
private void ResetAllowGatewayTransit()
```

##### `ResetAllowVirtualNetworkAccess` <a name="ResetAllowVirtualNetworkAccess" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowVirtualNetworkAccess"></a>

```csharp
private void ResetAllowVirtualNetworkAccess()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUseRemoteGateways` <a name="ResetUseRemoteGateways" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetUseRemoteGateways"></a>

```csharp
private void ResetUseRemoteGateways()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatabricksVirtualNetworkPeering resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DatabricksVirtualNetworkPeering.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DatabricksVirtualNetworkPeering.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DatabricksVirtualNetworkPeering.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

DatabricksVirtualNetworkPeering.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DatabricksVirtualNetworkPeering resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabricksVirtualNetworkPeering to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabricksVirtualNetworkPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DatabricksVirtualNetworkPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.addressSpacePrefixes">AddressSpacePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference">DatabricksVirtualNetworkPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowForwardedTrafficInput">AllowForwardedTrafficInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowGatewayTransitInput">AllowGatewayTransitInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowVirtualNetworkAccessInput">AllowVirtualNetworkAccessInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteAddressSpacePrefixesInput">RemoteAddressSpacePrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteVirtualNetworkIdInput">RemoteVirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.useRemoteGatewaysInput">UseRemoteGatewaysInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowForwardedTraffic">AllowForwardedTraffic</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowGatewayTransit">AllowGatewayTransit</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowVirtualNetworkAccess">AllowVirtualNetworkAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteAddressSpacePrefixes">RemoteAddressSpacePrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteVirtualNetworkId">RemoteVirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.useRemoteGateways">UseRemoteGateways</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AddressSpacePrefixes`<sup>Required</sup> <a name="AddressSpacePrefixes" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.addressSpacePrefixes"></a>

```csharp
public string[] AddressSpacePrefixes { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.timeouts"></a>

```csharp
public DatabricksVirtualNetworkPeeringTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference">DatabricksVirtualNetworkPeeringTimeoutsOutputReference</a>

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

##### `AllowForwardedTrafficInput`<sup>Optional</sup> <a name="AllowForwardedTrafficInput" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowForwardedTrafficInput"></a>

```csharp
public bool|IResolvable AllowForwardedTrafficInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowGatewayTransitInput`<sup>Optional</sup> <a name="AllowGatewayTransitInput" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowGatewayTransitInput"></a>

```csharp
public bool|IResolvable AllowGatewayTransitInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowVirtualNetworkAccessInput`<sup>Optional</sup> <a name="AllowVirtualNetworkAccessInput" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowVirtualNetworkAccessInput"></a>

```csharp
public bool|IResolvable AllowVirtualNetworkAccessInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RemoteAddressSpacePrefixesInput`<sup>Optional</sup> <a name="RemoteAddressSpacePrefixesInput" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteAddressSpacePrefixesInput"></a>

```csharp
public string[] RemoteAddressSpacePrefixesInput { get; }
```

- *Type:* string[]

---

##### `RemoteVirtualNetworkIdInput`<sup>Optional</sup> <a name="RemoteVirtualNetworkIdInput" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteVirtualNetworkIdInput"></a>

```csharp
public string RemoteVirtualNetworkIdInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.timeoutsInput"></a>

```csharp
public IResolvable|DatabricksVirtualNetworkPeeringTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a>

---

##### `UseRemoteGatewaysInput`<sup>Optional</sup> <a name="UseRemoteGatewaysInput" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.useRemoteGatewaysInput"></a>

```csharp
public bool|IResolvable UseRemoteGatewaysInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `AllowForwardedTraffic`<sup>Required</sup> <a name="AllowForwardedTraffic" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowForwardedTraffic"></a>

```csharp
public bool|IResolvable AllowForwardedTraffic { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowGatewayTransit`<sup>Required</sup> <a name="AllowGatewayTransit" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowGatewayTransit"></a>

```csharp
public bool|IResolvable AllowGatewayTransit { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowVirtualNetworkAccess`<sup>Required</sup> <a name="AllowVirtualNetworkAccess" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowVirtualNetworkAccess"></a>

```csharp
public bool|IResolvable AllowVirtualNetworkAccess { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RemoteAddressSpacePrefixes`<sup>Required</sup> <a name="RemoteAddressSpacePrefixes" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteAddressSpacePrefixes"></a>

```csharp
public string[] RemoteAddressSpacePrefixes { get; }
```

- *Type:* string[]

---

##### `RemoteVirtualNetworkId`<sup>Required</sup> <a name="RemoteVirtualNetworkId" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteVirtualNetworkId"></a>

```csharp
public string RemoteVirtualNetworkId { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `UseRemoteGateways`<sup>Required</sup> <a name="UseRemoteGateways" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.useRemoteGateways"></a>

```csharp
public bool|IResolvable UseRemoteGateways { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabricksVirtualNetworkPeeringConfig <a name="DatabricksVirtualNetworkPeeringConfig" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DatabricksVirtualNetworkPeeringConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string[] RemoteAddressSpacePrefixes,
    string RemoteVirtualNetworkId,
    string ResourceGroupName,
    string WorkspaceId,
    bool|IResolvable AllowForwardedTraffic = null,
    bool|IResolvable AllowGatewayTransit = null,
    bool|IResolvable AllowVirtualNetworkAccess = null,
    string Id = null,
    DatabricksVirtualNetworkPeeringTimeouts Timeouts = null,
    bool|IResolvable UseRemoteGateways = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#name DatabricksVirtualNetworkPeering#name}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.remoteAddressSpacePrefixes">RemoteAddressSpacePrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#remote_address_space_prefixes DatabricksVirtualNetworkPeering#remote_address_space_prefixes}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.remoteVirtualNetworkId">RemoteVirtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#remote_virtual_network_id DatabricksVirtualNetworkPeering#remote_virtual_network_id}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#resource_group_name DatabricksVirtualNetworkPeering#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#workspace_id DatabricksVirtualNetworkPeering#workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowForwardedTraffic">AllowForwardedTraffic</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#allow_forwarded_traffic DatabricksVirtualNetworkPeering#allow_forwarded_traffic}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowGatewayTransit">AllowGatewayTransit</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#allow_gateway_transit DatabricksVirtualNetworkPeering#allow_gateway_transit}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowVirtualNetworkAccess">AllowVirtualNetworkAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#allow_virtual_network_access DatabricksVirtualNetworkPeering#allow_virtual_network_access}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#id DatabricksVirtualNetworkPeering#id}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.useRemoteGateways">UseRemoteGateways</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#use_remote_gateways DatabricksVirtualNetworkPeering#use_remote_gateways}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#name DatabricksVirtualNetworkPeering#name}.

---

##### `RemoteAddressSpacePrefixes`<sup>Required</sup> <a name="RemoteAddressSpacePrefixes" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.remoteAddressSpacePrefixes"></a>

```csharp
public string[] RemoteAddressSpacePrefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#remote_address_space_prefixes DatabricksVirtualNetworkPeering#remote_address_space_prefixes}.

---

##### `RemoteVirtualNetworkId`<sup>Required</sup> <a name="RemoteVirtualNetworkId" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.remoteVirtualNetworkId"></a>

```csharp
public string RemoteVirtualNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#remote_virtual_network_id DatabricksVirtualNetworkPeering#remote_virtual_network_id}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#resource_group_name DatabricksVirtualNetworkPeering#resource_group_name}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#workspace_id DatabricksVirtualNetworkPeering#workspace_id}.

---

##### `AllowForwardedTraffic`<sup>Optional</sup> <a name="AllowForwardedTraffic" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowForwardedTraffic"></a>

```csharp
public bool|IResolvable AllowForwardedTraffic { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#allow_forwarded_traffic DatabricksVirtualNetworkPeering#allow_forwarded_traffic}.

---

##### `AllowGatewayTransit`<sup>Optional</sup> <a name="AllowGatewayTransit" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowGatewayTransit"></a>

```csharp
public bool|IResolvable AllowGatewayTransit { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#allow_gateway_transit DatabricksVirtualNetworkPeering#allow_gateway_transit}.

---

##### `AllowVirtualNetworkAccess`<sup>Optional</sup> <a name="AllowVirtualNetworkAccess" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowVirtualNetworkAccess"></a>

```csharp
public bool|IResolvable AllowVirtualNetworkAccess { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#allow_virtual_network_access DatabricksVirtualNetworkPeering#allow_virtual_network_access}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#id DatabricksVirtualNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.timeouts"></a>

```csharp
public DatabricksVirtualNetworkPeeringTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#timeouts DatabricksVirtualNetworkPeering#timeouts}

---

##### `UseRemoteGateways`<sup>Optional</sup> <a name="UseRemoteGateways" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.useRemoteGateways"></a>

```csharp
public bool|IResolvable UseRemoteGateways { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#use_remote_gateways DatabricksVirtualNetworkPeering#use_remote_gateways}.

---

### DatabricksVirtualNetworkPeeringTimeouts <a name="DatabricksVirtualNetworkPeeringTimeouts" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DatabricksVirtualNetworkPeeringTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#create DatabricksVirtualNetworkPeering#create}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#delete DatabricksVirtualNetworkPeering#delete}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#read DatabricksVirtualNetworkPeering#read}. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#update DatabricksVirtualNetworkPeering#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#create DatabricksVirtualNetworkPeering#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#delete DatabricksVirtualNetworkPeering#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#read DatabricksVirtualNetworkPeering#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/databricks_virtual_network_peering#update DatabricksVirtualNetworkPeering#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabricksVirtualNetworkPeeringTimeoutsOutputReference <a name="DatabricksVirtualNetworkPeeringTimeoutsOutputReference" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new DatabricksVirtualNetworkPeeringTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabricksVirtualNetworkPeeringTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a>

---



