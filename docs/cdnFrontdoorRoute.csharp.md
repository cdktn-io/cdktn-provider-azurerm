# `cdnFrontdoorRoute` Submodule <a name="`cdnFrontdoorRoute` Submodule" id="@cdktn/provider-azurerm.cdnFrontdoorRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnFrontdoorRoute <a name="CdnFrontdoorRoute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route azurerm_cdn_frontdoor_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CdnFrontdoorRoute(Construct Scope, string Id, CdnFrontdoorRouteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig">CdnFrontdoorRouteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig">CdnFrontdoorRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.putCache">PutCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetCache">ResetCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetCdnFrontdoorCustomDomainIds">ResetCdnFrontdoorCustomDomainIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetCdnFrontdoorOriginIds">ResetCdnFrontdoorOriginIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetCdnFrontdoorOriginPath">ResetCdnFrontdoorOriginPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetCdnFrontdoorRuleSetIds">ResetCdnFrontdoorRuleSetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetForwardingProtocol">ResetForwardingProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetHttpsRedirectEnabled">ResetHttpsRedirectEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetLinkToDefaultDomain">ResetLinkToDefaultDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCache` <a name="PutCache" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.putCache"></a>

```csharp
private void PutCache(CdnFrontdoorRouteCache Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.putCache.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache">CdnFrontdoorRouteCache</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.putTimeouts"></a>

```csharp
private void PutTimeouts(CdnFrontdoorRouteTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts">CdnFrontdoorRouteTimeouts</a>

---

##### `ResetCache` <a name="ResetCache" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetCache"></a>

```csharp
private void ResetCache()
```

##### `ResetCdnFrontdoorCustomDomainIds` <a name="ResetCdnFrontdoorCustomDomainIds" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetCdnFrontdoorCustomDomainIds"></a>

```csharp
private void ResetCdnFrontdoorCustomDomainIds()
```

##### `ResetCdnFrontdoorOriginIds` <a name="ResetCdnFrontdoorOriginIds" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetCdnFrontdoorOriginIds"></a>

```csharp
private void ResetCdnFrontdoorOriginIds()
```

##### `ResetCdnFrontdoorOriginPath` <a name="ResetCdnFrontdoorOriginPath" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetCdnFrontdoorOriginPath"></a>

```csharp
private void ResetCdnFrontdoorOriginPath()
```

##### `ResetCdnFrontdoorRuleSetIds` <a name="ResetCdnFrontdoorRuleSetIds" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetCdnFrontdoorRuleSetIds"></a>

```csharp
private void ResetCdnFrontdoorRuleSetIds()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetForwardingProtocol` <a name="ResetForwardingProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetForwardingProtocol"></a>

```csharp
private void ResetForwardingProtocol()
```

##### `ResetHttpsRedirectEnabled` <a name="ResetHttpsRedirectEnabled" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetHttpsRedirectEnabled"></a>

```csharp
private void ResetHttpsRedirectEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLinkToDefaultDomain` <a name="ResetLinkToDefaultDomain" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetLinkToDefaultDomain"></a>

```csharp
private void ResetLinkToDefaultDomain()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CdnFrontdoorRoute resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

CdnFrontdoorRoute.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

CdnFrontdoorRoute.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

CdnFrontdoorRoute.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

CdnFrontdoorRoute.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CdnFrontdoorRoute resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CdnFrontdoorRoute to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CdnFrontdoorRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CdnFrontdoorRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cache">Cache</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference">CdnFrontdoorRouteCacheOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference">CdnFrontdoorRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cacheInput">CacheInput</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache">CdnFrontdoorRouteCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorCustomDomainIdsInput">CdnFrontdoorCustomDomainIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorEndpointIdInput">CdnFrontdoorEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginGroupIdInput">CdnFrontdoorOriginGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginIdsInput">CdnFrontdoorOriginIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginPathInput">CdnFrontdoorOriginPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorRuleSetIdsInput">CdnFrontdoorRuleSetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.forwardingProtocolInput">ForwardingProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.httpsRedirectEnabledInput">HttpsRedirectEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.linkToDefaultDomainInput">LinkToDefaultDomainInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.patternsToMatchInput">PatternsToMatchInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.supportedProtocolsInput">SupportedProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts">CdnFrontdoorRouteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorCustomDomainIds">CdnFrontdoorCustomDomainIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorEndpointId">CdnFrontdoorEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginGroupId">CdnFrontdoorOriginGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginIds">CdnFrontdoorOriginIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginPath">CdnFrontdoorOriginPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorRuleSetIds">CdnFrontdoorRuleSetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.forwardingProtocol">ForwardingProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.httpsRedirectEnabled">HttpsRedirectEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.linkToDefaultDomain">LinkToDefaultDomain</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.patternsToMatch">PatternsToMatch</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.supportedProtocols">SupportedProtocols</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Cache`<sup>Required</sup> <a name="Cache" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cache"></a>

```csharp
public CdnFrontdoorRouteCacheOutputReference Cache { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference">CdnFrontdoorRouteCacheOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.timeouts"></a>

```csharp
public CdnFrontdoorRouteTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference">CdnFrontdoorRouteTimeoutsOutputReference</a>

---

##### `CacheInput`<sup>Optional</sup> <a name="CacheInput" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cacheInput"></a>

```csharp
public CdnFrontdoorRouteCache CacheInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache">CdnFrontdoorRouteCache</a>

---

##### `CdnFrontdoorCustomDomainIdsInput`<sup>Optional</sup> <a name="CdnFrontdoorCustomDomainIdsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorCustomDomainIdsInput"></a>

```csharp
public string[] CdnFrontdoorCustomDomainIdsInput { get; }
```

- *Type:* string[]

---

##### `CdnFrontdoorEndpointIdInput`<sup>Optional</sup> <a name="CdnFrontdoorEndpointIdInput" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorEndpointIdInput"></a>

```csharp
public string CdnFrontdoorEndpointIdInput { get; }
```

- *Type:* string

---

##### `CdnFrontdoorOriginGroupIdInput`<sup>Optional</sup> <a name="CdnFrontdoorOriginGroupIdInput" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginGroupIdInput"></a>

```csharp
public string CdnFrontdoorOriginGroupIdInput { get; }
```

- *Type:* string

---

##### `CdnFrontdoorOriginIdsInput`<sup>Optional</sup> <a name="CdnFrontdoorOriginIdsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginIdsInput"></a>

```csharp
public string[] CdnFrontdoorOriginIdsInput { get; }
```

- *Type:* string[]

---

##### `CdnFrontdoorOriginPathInput`<sup>Optional</sup> <a name="CdnFrontdoorOriginPathInput" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginPathInput"></a>

```csharp
public string CdnFrontdoorOriginPathInput { get; }
```

- *Type:* string

---

##### `CdnFrontdoorRuleSetIdsInput`<sup>Optional</sup> <a name="CdnFrontdoorRuleSetIdsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorRuleSetIdsInput"></a>

```csharp
public string[] CdnFrontdoorRuleSetIdsInput { get; }
```

- *Type:* string[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForwardingProtocolInput`<sup>Optional</sup> <a name="ForwardingProtocolInput" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.forwardingProtocolInput"></a>

```csharp
public string ForwardingProtocolInput { get; }
```

- *Type:* string

---

##### `HttpsRedirectEnabledInput`<sup>Optional</sup> <a name="HttpsRedirectEnabledInput" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.httpsRedirectEnabledInput"></a>

```csharp
public bool|IResolvable HttpsRedirectEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LinkToDefaultDomainInput`<sup>Optional</sup> <a name="LinkToDefaultDomainInput" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.linkToDefaultDomainInput"></a>

```csharp
public bool|IResolvable LinkToDefaultDomainInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PatternsToMatchInput`<sup>Optional</sup> <a name="PatternsToMatchInput" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.patternsToMatchInput"></a>

```csharp
public string[] PatternsToMatchInput { get; }
```

- *Type:* string[]

---

##### `SupportedProtocolsInput`<sup>Optional</sup> <a name="SupportedProtocolsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.supportedProtocolsInput"></a>

```csharp
public string[] SupportedProtocolsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.timeoutsInput"></a>

```csharp
public IResolvable|CdnFrontdoorRouteTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts">CdnFrontdoorRouteTimeouts</a>

---

##### `CdnFrontdoorCustomDomainIds`<sup>Required</sup> <a name="CdnFrontdoorCustomDomainIds" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorCustomDomainIds"></a>

```csharp
public string[] CdnFrontdoorCustomDomainIds { get; }
```

- *Type:* string[]

---

##### `CdnFrontdoorEndpointId`<sup>Required</sup> <a name="CdnFrontdoorEndpointId" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorEndpointId"></a>

```csharp
public string CdnFrontdoorEndpointId { get; }
```

- *Type:* string

---

##### `CdnFrontdoorOriginGroupId`<sup>Required</sup> <a name="CdnFrontdoorOriginGroupId" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginGroupId"></a>

```csharp
public string CdnFrontdoorOriginGroupId { get; }
```

- *Type:* string

---

##### `CdnFrontdoorOriginIds`<sup>Required</sup> <a name="CdnFrontdoorOriginIds" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginIds"></a>

```csharp
public string[] CdnFrontdoorOriginIds { get; }
```

- *Type:* string[]

---

##### `CdnFrontdoorOriginPath`<sup>Required</sup> <a name="CdnFrontdoorOriginPath" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorOriginPath"></a>

```csharp
public string CdnFrontdoorOriginPath { get; }
```

- *Type:* string

---

##### `CdnFrontdoorRuleSetIds`<sup>Required</sup> <a name="CdnFrontdoorRuleSetIds" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.cdnFrontdoorRuleSetIds"></a>

```csharp
public string[] CdnFrontdoorRuleSetIds { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForwardingProtocol`<sup>Required</sup> <a name="ForwardingProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.forwardingProtocol"></a>

```csharp
public string ForwardingProtocol { get; }
```

- *Type:* string

---

##### `HttpsRedirectEnabled`<sup>Required</sup> <a name="HttpsRedirectEnabled" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.httpsRedirectEnabled"></a>

```csharp
public bool|IResolvable HttpsRedirectEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LinkToDefaultDomain`<sup>Required</sup> <a name="LinkToDefaultDomain" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.linkToDefaultDomain"></a>

```csharp
public bool|IResolvable LinkToDefaultDomain { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PatternsToMatch`<sup>Required</sup> <a name="PatternsToMatch" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.patternsToMatch"></a>

```csharp
public string[] PatternsToMatch { get; }
```

- *Type:* string[]

---

##### `SupportedProtocols`<sup>Required</sup> <a name="SupportedProtocols" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.supportedProtocols"></a>

```csharp
public string[] SupportedProtocols { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRoute.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CdnFrontdoorRouteCache <a name="CdnFrontdoorRouteCache" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CdnFrontdoorRouteCache {
    bool|IResolvable CompressionEnabled = null,
    string[] ContentTypesToCompress = null,
    string QueryStringCachingBehavior = null,
    string[] QueryStrings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.property.compressionEnabled">CompressionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#compression_enabled CdnFrontdoorRoute#compression_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.property.contentTypesToCompress">ContentTypesToCompress</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#content_types_to_compress CdnFrontdoorRoute#content_types_to_compress}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.property.queryStringCachingBehavior">QueryStringCachingBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#query_string_caching_behavior CdnFrontdoorRoute#query_string_caching_behavior}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.property.queryStrings">QueryStrings</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#query_strings CdnFrontdoorRoute#query_strings}. |

---

##### `CompressionEnabled`<sup>Optional</sup> <a name="CompressionEnabled" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.property.compressionEnabled"></a>

```csharp
public bool|IResolvable CompressionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#compression_enabled CdnFrontdoorRoute#compression_enabled}.

---

##### `ContentTypesToCompress`<sup>Optional</sup> <a name="ContentTypesToCompress" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.property.contentTypesToCompress"></a>

```csharp
public string[] ContentTypesToCompress { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#content_types_to_compress CdnFrontdoorRoute#content_types_to_compress}.

---

##### `QueryStringCachingBehavior`<sup>Optional</sup> <a name="QueryStringCachingBehavior" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.property.queryStringCachingBehavior"></a>

```csharp
public string QueryStringCachingBehavior { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#query_string_caching_behavior CdnFrontdoorRoute#query_string_caching_behavior}.

---

##### `QueryStrings`<sup>Optional</sup> <a name="QueryStrings" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache.property.queryStrings"></a>

```csharp
public string[] QueryStrings { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#query_strings CdnFrontdoorRoute#query_strings}.

---

### CdnFrontdoorRouteConfig <a name="CdnFrontdoorRouteConfig" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CdnFrontdoorRouteConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CdnFrontdoorEndpointId,
    string CdnFrontdoorOriginGroupId,
    string Name,
    string[] PatternsToMatch,
    string[] SupportedProtocols,
    CdnFrontdoorRouteCache Cache = null,
    string[] CdnFrontdoorCustomDomainIds = null,
    string[] CdnFrontdoorOriginIds = null,
    string CdnFrontdoorOriginPath = null,
    string[] CdnFrontdoorRuleSetIds = null,
    bool|IResolvable Enabled = null,
    string ForwardingProtocol = null,
    bool|IResolvable HttpsRedirectEnabled = null,
    string Id = null,
    bool|IResolvable LinkToDefaultDomain = null,
    CdnFrontdoorRouteTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorEndpointId">CdnFrontdoorEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_endpoint_id CdnFrontdoorRoute#cdn_frontdoor_endpoint_id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorOriginGroupId">CdnFrontdoorOriginGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_origin_group_id CdnFrontdoorRoute#cdn_frontdoor_origin_group_id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#name CdnFrontdoorRoute#name}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.patternsToMatch">PatternsToMatch</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#patterns_to_match CdnFrontdoorRoute#patterns_to_match}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.supportedProtocols">SupportedProtocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#supported_protocols CdnFrontdoorRoute#supported_protocols}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cache">Cache</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache">CdnFrontdoorRouteCache</a></code> | cache block. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorCustomDomainIds">CdnFrontdoorCustomDomainIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_custom_domain_ids CdnFrontdoorRoute#cdn_frontdoor_custom_domain_ids}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorOriginIds">CdnFrontdoorOriginIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_origin_ids CdnFrontdoorRoute#cdn_frontdoor_origin_ids}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorOriginPath">CdnFrontdoorOriginPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_origin_path CdnFrontdoorRoute#cdn_frontdoor_origin_path}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorRuleSetIds">CdnFrontdoorRuleSetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_rule_set_ids CdnFrontdoorRoute#cdn_frontdoor_rule_set_ids}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#enabled CdnFrontdoorRoute#enabled}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.forwardingProtocol">ForwardingProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#forwarding_protocol CdnFrontdoorRoute#forwarding_protocol}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.httpsRedirectEnabled">HttpsRedirectEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#https_redirect_enabled CdnFrontdoorRoute#https_redirect_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#id CdnFrontdoorRoute#id}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.linkToDefaultDomain">LinkToDefaultDomain</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#link_to_default_domain CdnFrontdoorRoute#link_to_default_domain}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts">CdnFrontdoorRouteTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CdnFrontdoorEndpointId`<sup>Required</sup> <a name="CdnFrontdoorEndpointId" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorEndpointId"></a>

```csharp
public string CdnFrontdoorEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_endpoint_id CdnFrontdoorRoute#cdn_frontdoor_endpoint_id}.

---

##### `CdnFrontdoorOriginGroupId`<sup>Required</sup> <a name="CdnFrontdoorOriginGroupId" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorOriginGroupId"></a>

```csharp
public string CdnFrontdoorOriginGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_origin_group_id CdnFrontdoorRoute#cdn_frontdoor_origin_group_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#name CdnFrontdoorRoute#name}.

---

##### `PatternsToMatch`<sup>Required</sup> <a name="PatternsToMatch" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.patternsToMatch"></a>

```csharp
public string[] PatternsToMatch { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#patterns_to_match CdnFrontdoorRoute#patterns_to_match}.

---

##### `SupportedProtocols`<sup>Required</sup> <a name="SupportedProtocols" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.supportedProtocols"></a>

```csharp
public string[] SupportedProtocols { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#supported_protocols CdnFrontdoorRoute#supported_protocols}.

---

##### `Cache`<sup>Optional</sup> <a name="Cache" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cache"></a>

```csharp
public CdnFrontdoorRouteCache Cache { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache">CdnFrontdoorRouteCache</a>

cache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#cache CdnFrontdoorRoute#cache}

---

##### `CdnFrontdoorCustomDomainIds`<sup>Optional</sup> <a name="CdnFrontdoorCustomDomainIds" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorCustomDomainIds"></a>

```csharp
public string[] CdnFrontdoorCustomDomainIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_custom_domain_ids CdnFrontdoorRoute#cdn_frontdoor_custom_domain_ids}.

---

##### `CdnFrontdoorOriginIds`<sup>Optional</sup> <a name="CdnFrontdoorOriginIds" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorOriginIds"></a>

```csharp
public string[] CdnFrontdoorOriginIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_origin_ids CdnFrontdoorRoute#cdn_frontdoor_origin_ids}.

---

##### `CdnFrontdoorOriginPath`<sup>Optional</sup> <a name="CdnFrontdoorOriginPath" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorOriginPath"></a>

```csharp
public string CdnFrontdoorOriginPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_origin_path CdnFrontdoorRoute#cdn_frontdoor_origin_path}.

---

##### `CdnFrontdoorRuleSetIds`<sup>Optional</sup> <a name="CdnFrontdoorRuleSetIds" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.cdnFrontdoorRuleSetIds"></a>

```csharp
public string[] CdnFrontdoorRuleSetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#cdn_frontdoor_rule_set_ids CdnFrontdoorRoute#cdn_frontdoor_rule_set_ids}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#enabled CdnFrontdoorRoute#enabled}.

---

##### `ForwardingProtocol`<sup>Optional</sup> <a name="ForwardingProtocol" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.forwardingProtocol"></a>

```csharp
public string ForwardingProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#forwarding_protocol CdnFrontdoorRoute#forwarding_protocol}.

---

##### `HttpsRedirectEnabled`<sup>Optional</sup> <a name="HttpsRedirectEnabled" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.httpsRedirectEnabled"></a>

```csharp
public bool|IResolvable HttpsRedirectEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#https_redirect_enabled CdnFrontdoorRoute#https_redirect_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#id CdnFrontdoorRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LinkToDefaultDomain`<sup>Optional</sup> <a name="LinkToDefaultDomain" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.linkToDefaultDomain"></a>

```csharp
public bool|IResolvable LinkToDefaultDomain { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#link_to_default_domain CdnFrontdoorRoute#link_to_default_domain}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteConfig.property.timeouts"></a>

```csharp
public CdnFrontdoorRouteTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts">CdnFrontdoorRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#timeouts CdnFrontdoorRoute#timeouts}

---

### CdnFrontdoorRouteTimeouts <a name="CdnFrontdoorRouteTimeouts" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CdnFrontdoorRouteTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#create CdnFrontdoorRoute#create}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#delete CdnFrontdoorRoute#delete}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#read CdnFrontdoorRoute#read}. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#update CdnFrontdoorRoute#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#create CdnFrontdoorRoute#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#delete CdnFrontdoorRoute#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#read CdnFrontdoorRoute#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_route#update CdnFrontdoorRoute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnFrontdoorRouteCacheOutputReference <a name="CdnFrontdoorRouteCacheOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CdnFrontdoorRouteCacheOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resetCompressionEnabled">ResetCompressionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resetContentTypesToCompress">ResetContentTypesToCompress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resetQueryStringCachingBehavior">ResetQueryStringCachingBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resetQueryStrings">ResetQueryStrings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompressionEnabled` <a name="ResetCompressionEnabled" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resetCompressionEnabled"></a>

```csharp
private void ResetCompressionEnabled()
```

##### `ResetContentTypesToCompress` <a name="ResetContentTypesToCompress" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resetContentTypesToCompress"></a>

```csharp
private void ResetContentTypesToCompress()
```

##### `ResetQueryStringCachingBehavior` <a name="ResetQueryStringCachingBehavior" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resetQueryStringCachingBehavior"></a>

```csharp
private void ResetQueryStringCachingBehavior()
```

##### `ResetQueryStrings` <a name="ResetQueryStrings" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.resetQueryStrings"></a>

```csharp
private void ResetQueryStrings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.compressionEnabledInput">CompressionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.contentTypesToCompressInput">ContentTypesToCompressInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.queryStringCachingBehaviorInput">QueryStringCachingBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.queryStringsInput">QueryStringsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.compressionEnabled">CompressionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.contentTypesToCompress">ContentTypesToCompress</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.queryStringCachingBehavior">QueryStringCachingBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.queryStrings">QueryStrings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache">CdnFrontdoorRouteCache</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompressionEnabledInput`<sup>Optional</sup> <a name="CompressionEnabledInput" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.compressionEnabledInput"></a>

```csharp
public bool|IResolvable CompressionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ContentTypesToCompressInput`<sup>Optional</sup> <a name="ContentTypesToCompressInput" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.contentTypesToCompressInput"></a>

```csharp
public string[] ContentTypesToCompressInput { get; }
```

- *Type:* string[]

---

##### `QueryStringCachingBehaviorInput`<sup>Optional</sup> <a name="QueryStringCachingBehaviorInput" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.queryStringCachingBehaviorInput"></a>

```csharp
public string QueryStringCachingBehaviorInput { get; }
```

- *Type:* string

---

##### `QueryStringsInput`<sup>Optional</sup> <a name="QueryStringsInput" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.queryStringsInput"></a>

```csharp
public string[] QueryStringsInput { get; }
```

- *Type:* string[]

---

##### `CompressionEnabled`<sup>Required</sup> <a name="CompressionEnabled" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.compressionEnabled"></a>

```csharp
public bool|IResolvable CompressionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ContentTypesToCompress`<sup>Required</sup> <a name="ContentTypesToCompress" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.contentTypesToCompress"></a>

```csharp
public string[] ContentTypesToCompress { get; }
```

- *Type:* string[]

---

##### `QueryStringCachingBehavior`<sup>Required</sup> <a name="QueryStringCachingBehavior" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.queryStringCachingBehavior"></a>

```csharp
public string QueryStringCachingBehavior { get; }
```

- *Type:* string

---

##### `QueryStrings`<sup>Required</sup> <a name="QueryStrings" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.queryStrings"></a>

```csharp
public string[] QueryStrings { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCacheOutputReference.property.internalValue"></a>

```csharp
public CdnFrontdoorRouteCache InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteCache">CdnFrontdoorRouteCache</a>

---


### CdnFrontdoorRouteTimeoutsOutputReference <a name="CdnFrontdoorRouteTimeoutsOutputReference" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new CdnFrontdoorRouteTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts">CdnFrontdoorRouteTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CdnFrontdoorRouteTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.cdnFrontdoorRoute.CdnFrontdoorRouteTimeouts">CdnFrontdoorRouteTimeouts</a>

---



