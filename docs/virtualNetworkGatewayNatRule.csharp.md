# `virtualNetworkGatewayNatRule` Submodule <a name="`virtualNetworkGatewayNatRule` Submodule" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualNetworkGatewayNatRule <a name="VirtualNetworkGatewayNatRule" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule azurerm_virtual_network_gateway_nat_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new VirtualNetworkGatewayNatRule(Construct Scope, string Id, VirtualNetworkGatewayNatRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig">VirtualNetworkGatewayNatRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig">VirtualNetworkGatewayNatRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putExternalMapping">PutExternalMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putInternalMapping">PutInternalMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetIpConfigurationId">ResetIpConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExternalMapping` <a name="PutExternalMapping" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putExternalMapping"></a>

```csharp
private void PutExternalMapping(IResolvable|VirtualNetworkGatewayNatRuleExternalMapping[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putExternalMapping.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>[]

---

##### `PutInternalMapping` <a name="PutInternalMapping" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putInternalMapping"></a>

```csharp
private void PutInternalMapping(IResolvable|VirtualNetworkGatewayNatRuleInternalMapping[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putInternalMapping.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putTimeouts"></a>

```csharp
private void PutTimeouts(VirtualNetworkGatewayNatRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts">VirtualNetworkGatewayNatRuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpConfigurationId` <a name="ResetIpConfigurationId" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetIpConfigurationId"></a>

```csharp
private void ResetIpConfigurationId()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VirtualNetworkGatewayNatRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

VirtualNetworkGatewayNatRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

VirtualNetworkGatewayNatRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

VirtualNetworkGatewayNatRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

VirtualNetworkGatewayNatRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VirtualNetworkGatewayNatRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualNetworkGatewayNatRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualNetworkGatewayNatRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VirtualNetworkGatewayNatRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.externalMapping">ExternalMapping</a></code> | <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList">VirtualNetworkGatewayNatRuleExternalMappingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.internalMapping">InternalMapping</a></code> | <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList">VirtualNetworkGatewayNatRuleInternalMappingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference">VirtualNetworkGatewayNatRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.externalMappingInput">ExternalMappingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.internalMappingInput">InternalMappingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.ipConfigurationIdInput">IpConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts">VirtualNetworkGatewayNatRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.virtualNetworkGatewayIdInput">VirtualNetworkGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.ipConfigurationId">IpConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.virtualNetworkGatewayId">VirtualNetworkGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ExternalMapping`<sup>Required</sup> <a name="ExternalMapping" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.externalMapping"></a>

```csharp
public VirtualNetworkGatewayNatRuleExternalMappingList ExternalMapping { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList">VirtualNetworkGatewayNatRuleExternalMappingList</a>

---

##### `InternalMapping`<sup>Required</sup> <a name="InternalMapping" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.internalMapping"></a>

```csharp
public VirtualNetworkGatewayNatRuleInternalMappingList InternalMapping { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList">VirtualNetworkGatewayNatRuleInternalMappingList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.timeouts"></a>

```csharp
public VirtualNetworkGatewayNatRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference">VirtualNetworkGatewayNatRuleTimeoutsOutputReference</a>

---

##### `ExternalMappingInput`<sup>Optional</sup> <a name="ExternalMappingInput" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.externalMappingInput"></a>

```csharp
public IResolvable|VirtualNetworkGatewayNatRuleExternalMapping[] ExternalMappingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InternalMappingInput`<sup>Optional</sup> <a name="InternalMappingInput" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.internalMappingInput"></a>

```csharp
public IResolvable|VirtualNetworkGatewayNatRuleInternalMapping[] InternalMappingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>[]

---

##### `IpConfigurationIdInput`<sup>Optional</sup> <a name="IpConfigurationIdInput" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.ipConfigurationIdInput"></a>

```csharp
public string IpConfigurationIdInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.timeoutsInput"></a>

```csharp
public IResolvable|VirtualNetworkGatewayNatRuleTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts">VirtualNetworkGatewayNatRuleTimeouts</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkGatewayIdInput`<sup>Optional</sup> <a name="VirtualNetworkGatewayIdInput" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.virtualNetworkGatewayIdInput"></a>

```csharp
public string VirtualNetworkGatewayIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpConfigurationId`<sup>Required</sup> <a name="IpConfigurationId" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.ipConfigurationId"></a>

```csharp
public string IpConfigurationId { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VirtualNetworkGatewayId`<sup>Required</sup> <a name="VirtualNetworkGatewayId" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.virtualNetworkGatewayId"></a>

```csharp
public string VirtualNetworkGatewayId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualNetworkGatewayNatRuleConfig <a name="VirtualNetworkGatewayNatRuleConfig" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new VirtualNetworkGatewayNatRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|VirtualNetworkGatewayNatRuleExternalMapping[] ExternalMapping,
    IResolvable|VirtualNetworkGatewayNatRuleInternalMapping[] InternalMapping,
    string Name,
    string ResourceGroupName,
    string VirtualNetworkGatewayId,
    string Id = null,
    string IpConfigurationId = null,
    string Mode = null,
    VirtualNetworkGatewayNatRuleTimeouts Timeouts = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.externalMapping">ExternalMapping</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>[]</code> | external_mapping block. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.internalMapping">InternalMapping</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>[]</code> | internal_mapping block. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#name VirtualNetworkGatewayNatRule#name}. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#resource_group_name VirtualNetworkGatewayNatRule#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.virtualNetworkGatewayId">VirtualNetworkGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#virtual_network_gateway_id VirtualNetworkGatewayNatRule#virtual_network_gateway_id}. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#id VirtualNetworkGatewayNatRule#id}. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.ipConfigurationId">IpConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#ip_configuration_id VirtualNetworkGatewayNatRule#ip_configuration_id}. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#mode VirtualNetworkGatewayNatRule#mode}. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts">VirtualNetworkGatewayNatRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#type VirtualNetworkGatewayNatRule#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ExternalMapping`<sup>Required</sup> <a name="ExternalMapping" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.externalMapping"></a>

```csharp
public IResolvable|VirtualNetworkGatewayNatRuleExternalMapping[] ExternalMapping { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>[]

external_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#external_mapping VirtualNetworkGatewayNatRule#external_mapping}

---

##### `InternalMapping`<sup>Required</sup> <a name="InternalMapping" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.internalMapping"></a>

```csharp
public IResolvable|VirtualNetworkGatewayNatRuleInternalMapping[] InternalMapping { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>[]

internal_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#internal_mapping VirtualNetworkGatewayNatRule#internal_mapping}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#name VirtualNetworkGatewayNatRule#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#resource_group_name VirtualNetworkGatewayNatRule#resource_group_name}.

---

##### `VirtualNetworkGatewayId`<sup>Required</sup> <a name="VirtualNetworkGatewayId" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.virtualNetworkGatewayId"></a>

```csharp
public string VirtualNetworkGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#virtual_network_gateway_id VirtualNetworkGatewayNatRule#virtual_network_gateway_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#id VirtualNetworkGatewayNatRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpConfigurationId`<sup>Optional</sup> <a name="IpConfigurationId" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.ipConfigurationId"></a>

```csharp
public string IpConfigurationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#ip_configuration_id VirtualNetworkGatewayNatRule#ip_configuration_id}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#mode VirtualNetworkGatewayNatRule#mode}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.timeouts"></a>

```csharp
public VirtualNetworkGatewayNatRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts">VirtualNetworkGatewayNatRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#timeouts VirtualNetworkGatewayNatRule#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#type VirtualNetworkGatewayNatRule#type}.

---

### VirtualNetworkGatewayNatRuleExternalMapping <a name="VirtualNetworkGatewayNatRuleExternalMapping" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new VirtualNetworkGatewayNatRuleExternalMapping {
    string AddressSpace,
    string PortRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping.property.addressSpace">AddressSpace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#address_space VirtualNetworkGatewayNatRule#address_space}. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping.property.portRange">PortRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#port_range VirtualNetworkGatewayNatRule#port_range}. |

---

##### `AddressSpace`<sup>Required</sup> <a name="AddressSpace" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping.property.addressSpace"></a>

```csharp
public string AddressSpace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#address_space VirtualNetworkGatewayNatRule#address_space}.

---

##### `PortRange`<sup>Optional</sup> <a name="PortRange" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping.property.portRange"></a>

```csharp
public string PortRange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#port_range VirtualNetworkGatewayNatRule#port_range}.

---

### VirtualNetworkGatewayNatRuleInternalMapping <a name="VirtualNetworkGatewayNatRuleInternalMapping" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new VirtualNetworkGatewayNatRuleInternalMapping {
    string AddressSpace,
    string PortRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping.property.addressSpace">AddressSpace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#address_space VirtualNetworkGatewayNatRule#address_space}. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping.property.portRange">PortRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#port_range VirtualNetworkGatewayNatRule#port_range}. |

---

##### `AddressSpace`<sup>Required</sup> <a name="AddressSpace" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping.property.addressSpace"></a>

```csharp
public string AddressSpace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#address_space VirtualNetworkGatewayNatRule#address_space}.

---

##### `PortRange`<sup>Optional</sup> <a name="PortRange" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping.property.portRange"></a>

```csharp
public string PortRange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#port_range VirtualNetworkGatewayNatRule#port_range}.

---

### VirtualNetworkGatewayNatRuleTimeouts <a name="VirtualNetworkGatewayNatRuleTimeouts" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new VirtualNetworkGatewayNatRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#create VirtualNetworkGatewayNatRule#create}. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#delete VirtualNetworkGatewayNatRule#delete}. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#read VirtualNetworkGatewayNatRule#read}. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#update VirtualNetworkGatewayNatRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#create VirtualNetworkGatewayNatRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#delete VirtualNetworkGatewayNatRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#read VirtualNetworkGatewayNatRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/virtual_network_gateway_nat_rule#update VirtualNetworkGatewayNatRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualNetworkGatewayNatRuleExternalMappingList <a name="VirtualNetworkGatewayNatRuleExternalMappingList" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new VirtualNetworkGatewayNatRuleExternalMappingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.get"></a>

```csharp
private VirtualNetworkGatewayNatRuleExternalMappingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.property.internalValue"></a>

```csharp
public IResolvable|VirtualNetworkGatewayNatRuleExternalMapping[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>[]

---


### VirtualNetworkGatewayNatRuleExternalMappingOutputReference <a name="VirtualNetworkGatewayNatRuleExternalMappingOutputReference" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new VirtualNetworkGatewayNatRuleExternalMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.resetPortRange">ResetPortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPortRange` <a name="ResetPortRange" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.resetPortRange"></a>

```csharp
private void ResetPortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.addressSpaceInput">AddressSpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.portRangeInput">PortRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.addressSpace">AddressSpace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.portRange">PortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressSpaceInput`<sup>Optional</sup> <a name="AddressSpaceInput" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.addressSpaceInput"></a>

```csharp
public string AddressSpaceInput { get; }
```

- *Type:* string

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.portRangeInput"></a>

```csharp
public string PortRangeInput { get; }
```

- *Type:* string

---

##### `AddressSpace`<sup>Required</sup> <a name="AddressSpace" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.addressSpace"></a>

```csharp
public string AddressSpace { get; }
```

- *Type:* string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.portRange"></a>

```csharp
public string PortRange { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VirtualNetworkGatewayNatRuleExternalMapping InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>

---


### VirtualNetworkGatewayNatRuleInternalMappingList <a name="VirtualNetworkGatewayNatRuleInternalMappingList" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new VirtualNetworkGatewayNatRuleInternalMappingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.get"></a>

```csharp
private VirtualNetworkGatewayNatRuleInternalMappingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.property.internalValue"></a>

```csharp
public IResolvable|VirtualNetworkGatewayNatRuleInternalMapping[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>[]

---


### VirtualNetworkGatewayNatRuleInternalMappingOutputReference <a name="VirtualNetworkGatewayNatRuleInternalMappingOutputReference" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new VirtualNetworkGatewayNatRuleInternalMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.resetPortRange">ResetPortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPortRange` <a name="ResetPortRange" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.resetPortRange"></a>

```csharp
private void ResetPortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.addressSpaceInput">AddressSpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.portRangeInput">PortRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.addressSpace">AddressSpace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.portRange">PortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressSpaceInput`<sup>Optional</sup> <a name="AddressSpaceInput" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.addressSpaceInput"></a>

```csharp
public string AddressSpaceInput { get; }
```

- *Type:* string

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.portRangeInput"></a>

```csharp
public string PortRangeInput { get; }
```

- *Type:* string

---

##### `AddressSpace`<sup>Required</sup> <a name="AddressSpace" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.addressSpace"></a>

```csharp
public string AddressSpace { get; }
```

- *Type:* string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.portRange"></a>

```csharp
public string PortRange { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VirtualNetworkGatewayNatRuleInternalMapping InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>

---


### VirtualNetworkGatewayNatRuleTimeoutsOutputReference <a name="VirtualNetworkGatewayNatRuleTimeoutsOutputReference" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new VirtualNetworkGatewayNatRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts">VirtualNetworkGatewayNatRuleTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VirtualNetworkGatewayNatRuleTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts">VirtualNetworkGatewayNatRuleTimeouts</a>

---



