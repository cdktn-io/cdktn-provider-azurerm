# `privateDnsZoneVirtualNetworkLink` Submodule <a name="`privateDnsZoneVirtualNetworkLink` Submodule" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateDnsZoneVirtualNetworkLink <a name="PrivateDnsZoneVirtualNetworkLink" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/private_dns_zone_virtual_network_link azurerm_private_dns_zone_virtual_network_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new PrivateDnsZoneVirtualNetworkLink(Construct Scope, string Id, PrivateDnsZoneVirtualNetworkLinkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig">PrivateDnsZoneVirtualNetworkLinkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig">PrivateDnsZoneVirtualNetworkLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetRegistrationEnabled">ResetRegistrationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetResolutionPolicy">ResetResolutionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.putTimeouts"></a>

```csharp
private void PutTimeouts(PrivateDnsZoneVirtualNetworkLinkTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegistrationEnabled` <a name="ResetRegistrationEnabled" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetRegistrationEnabled"></a>

```csharp
private void ResetRegistrationEnabled()
```

##### `ResetResolutionPolicy` <a name="ResetResolutionPolicy" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetResolutionPolicy"></a>

```csharp
private void ResetResolutionPolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PrivateDnsZoneVirtualNetworkLink resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

PrivateDnsZoneVirtualNetworkLink.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

PrivateDnsZoneVirtualNetworkLink.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

PrivateDnsZoneVirtualNetworkLink.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

PrivateDnsZoneVirtualNetworkLink.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PrivateDnsZoneVirtualNetworkLink resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivateDnsZoneVirtualNetworkLink to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivateDnsZoneVirtualNetworkLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/private_dns_zone_virtual_network_link#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PrivateDnsZoneVirtualNetworkLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference">PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneIdInput">PrivateDnsZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.registrationEnabledInput">RegistrationEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.resolutionPolicyInput">ResolutionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneId">PrivateDnsZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.registrationEnabled">RegistrationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.resolutionPolicy">ResolutionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.timeouts"></a>

```csharp
public PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference">PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrivateDnsZoneIdInput`<sup>Optional</sup> <a name="PrivateDnsZoneIdInput" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneIdInput"></a>

```csharp
public string PrivateDnsZoneIdInput { get; }
```

- *Type:* string

---

##### `RegistrationEnabledInput`<sup>Optional</sup> <a name="RegistrationEnabledInput" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.registrationEnabledInput"></a>

```csharp
public bool|IResolvable RegistrationEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ResolutionPolicyInput`<sup>Optional</sup> <a name="ResolutionPolicyInput" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.resolutionPolicyInput"></a>

```csharp
public string ResolutionPolicyInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.timeoutsInput"></a>

```csharp
public IResolvable|PrivateDnsZoneVirtualNetworkLinkTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a>

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.virtualNetworkIdInput"></a>

```csharp
public string VirtualNetworkIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateDnsZoneId`<sup>Required</sup> <a name="PrivateDnsZoneId" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneId"></a>

```csharp
public string PrivateDnsZoneId { get; }
```

- *Type:* string

---

##### `RegistrationEnabled`<sup>Required</sup> <a name="RegistrationEnabled" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.registrationEnabled"></a>

```csharp
public bool|IResolvable RegistrationEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ResolutionPolicy`<sup>Required</sup> <a name="ResolutionPolicy" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.resolutionPolicy"></a>

```csharp
public string ResolutionPolicy { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateDnsZoneVirtualNetworkLinkConfig <a name="PrivateDnsZoneVirtualNetworkLinkConfig" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new PrivateDnsZoneVirtualNetworkLinkConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string PrivateDnsZoneId,
    string VirtualNetworkId,
    string Id = null,
    bool|IResolvable RegistrationEnabled = null,
    string ResolutionPolicy = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    PrivateDnsZoneVirtualNetworkLinkTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/private_dns_zone_virtual_network_link#name PrivateDnsZoneVirtualNetworkLink#name}. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.privateDnsZoneId">PrivateDnsZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/private_dns_zone_virtual_network_link#private_dns_zone_id PrivateDnsZoneVirtualNetworkLink#private_dns_zone_id}. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/private_dns_zone_virtual_network_link#virtual_network_id PrivateDnsZoneVirtualNetworkLink#virtual_network_id}. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/private_dns_zone_virtual_network_link#id PrivateDnsZoneVirtualNetworkLink#id}. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.registrationEnabled">RegistrationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/private_dns_zone_virtual_network_link#registration_enabled PrivateDnsZoneVirtualNetworkLink#registration_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.resolutionPolicy">ResolutionPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/private_dns_zone_virtual_network_link#resolution_policy PrivateDnsZoneVirtualNetworkLink#resolution_policy}. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/private_dns_zone_virtual_network_link#tags PrivateDnsZoneVirtualNetworkLink#tags}. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/private_dns_zone_virtual_network_link#name PrivateDnsZoneVirtualNetworkLink#name}.

---

##### `PrivateDnsZoneId`<sup>Required</sup> <a name="PrivateDnsZoneId" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.privateDnsZoneId"></a>

```csharp
public string PrivateDnsZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/private_dns_zone_virtual_network_link#private_dns_zone_id PrivateDnsZoneVirtualNetworkLink#private_dns_zone_id}.

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/private_dns_zone_virtual_network_link#virtual_network_id PrivateDnsZoneVirtualNetworkLink#virtual_network_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/private_dns_zone_virtual_network_link#id PrivateDnsZoneVirtualNetworkLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RegistrationEnabled`<sup>Optional</sup> <a name="RegistrationEnabled" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.registrationEnabled"></a>

```csharp
public bool|IResolvable RegistrationEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/private_dns_zone_virtual_network_link#registration_enabled PrivateDnsZoneVirtualNetworkLink#registration_enabled}.

---

##### `ResolutionPolicy`<sup>Optional</sup> <a name="ResolutionPolicy" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.resolutionPolicy"></a>

```csharp
public string ResolutionPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/private_dns_zone_virtual_network_link#resolution_policy PrivateDnsZoneVirtualNetworkLink#resolution_policy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/private_dns_zone_virtual_network_link#tags PrivateDnsZoneVirtualNetworkLink#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.timeouts"></a>

```csharp
public PrivateDnsZoneVirtualNetworkLinkTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/private_dns_zone_virtual_network_link#timeouts PrivateDnsZoneVirtualNetworkLink#timeouts}

---

### PrivateDnsZoneVirtualNetworkLinkTimeouts <a name="PrivateDnsZoneVirtualNetworkLinkTimeouts" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new PrivateDnsZoneVirtualNetworkLinkTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/private_dns_zone_virtual_network_link#create PrivateDnsZoneVirtualNetworkLink#create}. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/private_dns_zone_virtual_network_link#delete PrivateDnsZoneVirtualNetworkLink#delete}. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/private_dns_zone_virtual_network_link#read PrivateDnsZoneVirtualNetworkLink#read}. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/private_dns_zone_virtual_network_link#update PrivateDnsZoneVirtualNetworkLink#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/private_dns_zone_virtual_network_link#create PrivateDnsZoneVirtualNetworkLink#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/private_dns_zone_virtual_network_link#delete PrivateDnsZoneVirtualNetworkLink#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/private_dns_zone_virtual_network_link#read PrivateDnsZoneVirtualNetworkLink#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/private_dns_zone_virtual_network_link#update PrivateDnsZoneVirtualNetworkLink#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference <a name="PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PrivateDnsZoneVirtualNetworkLinkTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a>

---



