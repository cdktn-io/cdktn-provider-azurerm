# `eventgridDomain` Submodule <a name="`eventgridDomain` Submodule" id="@cdktn/provider-azurerm.eventgridDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventgridDomain <a name="EventgridDomain" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain azurerm_eventgrid_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventgridDomain(Construct Scope, string Id, EventgridDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig">EventgridDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig">EventgridDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.putInboundIpRule">PutInboundIpRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.putInputMappingDefaultValues">PutInputMappingDefaultValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.putInputMappingFields">PutInputMappingFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.resetAutoCreateTopicWithFirstSubscription">ResetAutoCreateTopicWithFirstSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.resetAutoDeleteTopicWithLastSubscription">ResetAutoDeleteTopicWithLastSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.resetInboundIpRule">ResetInboundIpRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.resetInputMappingDefaultValues">ResetInputMappingDefaultValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.resetInputMappingFields">ResetInputMappingFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.resetInputSchema">ResetInputSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.resetLocalAuthEnabled">ResetLocalAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.putIdentity"></a>

```csharp
private void PutIdentity(EventgridDomainIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentity">EventgridDomainIdentity</a>

---

##### `PutInboundIpRule` <a name="PutInboundIpRule" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.putInboundIpRule"></a>

```csharp
private void PutInboundIpRule(IResolvable|EventgridDomainInboundIpRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.putInboundIpRule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule">EventgridDomainInboundIpRule</a>[]

---

##### `PutInputMappingDefaultValues` <a name="PutInputMappingDefaultValues" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.putInputMappingDefaultValues"></a>

```csharp
private void PutInputMappingDefaultValues(EventgridDomainInputMappingDefaultValues Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.putInputMappingDefaultValues.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues">EventgridDomainInputMappingDefaultValues</a>

---

##### `PutInputMappingFields` <a name="PutInputMappingFields" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.putInputMappingFields"></a>

```csharp
private void PutInputMappingFields(EventgridDomainInputMappingFields Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.putInputMappingFields.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields">EventgridDomainInputMappingFields</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.putTimeouts"></a>

```csharp
private void PutTimeouts(EventgridDomainTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeouts">EventgridDomainTimeouts</a>

---

##### `ResetAutoCreateTopicWithFirstSubscription` <a name="ResetAutoCreateTopicWithFirstSubscription" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.resetAutoCreateTopicWithFirstSubscription"></a>

```csharp
private void ResetAutoCreateTopicWithFirstSubscription()
```

##### `ResetAutoDeleteTopicWithLastSubscription` <a name="ResetAutoDeleteTopicWithLastSubscription" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.resetAutoDeleteTopicWithLastSubscription"></a>

```csharp
private void ResetAutoDeleteTopicWithLastSubscription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetInboundIpRule` <a name="ResetInboundIpRule" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.resetInboundIpRule"></a>

```csharp
private void ResetInboundIpRule()
```

##### `ResetInputMappingDefaultValues` <a name="ResetInputMappingDefaultValues" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.resetInputMappingDefaultValues"></a>

```csharp
private void ResetInputMappingDefaultValues()
```

##### `ResetInputMappingFields` <a name="ResetInputMappingFields" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.resetInputMappingFields"></a>

```csharp
private void ResetInputMappingFields()
```

##### `ResetInputSchema` <a name="ResetInputSchema" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.resetInputSchema"></a>

```csharp
private void ResetInputSchema()
```

##### `ResetLocalAuthEnabled` <a name="ResetLocalAuthEnabled" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.resetLocalAuthEnabled"></a>

```csharp
private void ResetLocalAuthEnabled()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.resetPublicNetworkAccessEnabled"></a>

```csharp
private void ResetPublicNetworkAccessEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EventgridDomain resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

EventgridDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

EventgridDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

EventgridDomain.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

EventgridDomain.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EventgridDomain resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventgridDomain to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventgridDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EventgridDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference">EventgridDomainIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.inboundIpRule">InboundIpRule</a></code> | <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList">EventgridDomainInboundIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.inputMappingDefaultValues">InputMappingDefaultValues</a></code> | <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference">EventgridDomainInputMappingDefaultValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.inputMappingFields">InputMappingFields</a></code> | <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference">EventgridDomainInputMappingFieldsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.primaryAccessKey">PrimaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.secondaryAccessKey">SecondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference">EventgridDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.autoCreateTopicWithFirstSubscriptionInput">AutoCreateTopicWithFirstSubscriptionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.autoDeleteTopicWithLastSubscriptionInput">AutoDeleteTopicWithLastSubscriptionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentity">EventgridDomainIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.inboundIpRuleInput">InboundIpRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule">EventgridDomainInboundIpRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.inputMappingDefaultValuesInput">InputMappingDefaultValuesInput</a></code> | <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues">EventgridDomainInputMappingDefaultValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.inputMappingFieldsInput">InputMappingFieldsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields">EventgridDomainInputMappingFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.inputSchemaInput">InputSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.localAuthEnabledInput">LocalAuthEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeouts">EventgridDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.autoCreateTopicWithFirstSubscription">AutoCreateTopicWithFirstSubscription</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.autoDeleteTopicWithLastSubscription">AutoDeleteTopicWithLastSubscription</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.inputSchema">InputSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.identity"></a>

```csharp
public EventgridDomainIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference">EventgridDomainIdentityOutputReference</a>

---

##### `InboundIpRule`<sup>Required</sup> <a name="InboundIpRule" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.inboundIpRule"></a>

```csharp
public EventgridDomainInboundIpRuleList InboundIpRule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList">EventgridDomainInboundIpRuleList</a>

---

##### `InputMappingDefaultValues`<sup>Required</sup> <a name="InputMappingDefaultValues" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.inputMappingDefaultValues"></a>

```csharp
public EventgridDomainInputMappingDefaultValuesOutputReference InputMappingDefaultValues { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference">EventgridDomainInputMappingDefaultValuesOutputReference</a>

---

##### `InputMappingFields`<sup>Required</sup> <a name="InputMappingFields" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.inputMappingFields"></a>

```csharp
public EventgridDomainInputMappingFieldsOutputReference InputMappingFields { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference">EventgridDomainInputMappingFieldsOutputReference</a>

---

##### `PrimaryAccessKey`<sup>Required</sup> <a name="PrimaryAccessKey" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.primaryAccessKey"></a>

```csharp
public string PrimaryAccessKey { get; }
```

- *Type:* string

---

##### `SecondaryAccessKey`<sup>Required</sup> <a name="SecondaryAccessKey" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.secondaryAccessKey"></a>

```csharp
public string SecondaryAccessKey { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.timeouts"></a>

```csharp
public EventgridDomainTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference">EventgridDomainTimeoutsOutputReference</a>

---

##### `AutoCreateTopicWithFirstSubscriptionInput`<sup>Optional</sup> <a name="AutoCreateTopicWithFirstSubscriptionInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.autoCreateTopicWithFirstSubscriptionInput"></a>

```csharp
public bool|IResolvable AutoCreateTopicWithFirstSubscriptionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutoDeleteTopicWithLastSubscriptionInput`<sup>Optional</sup> <a name="AutoDeleteTopicWithLastSubscriptionInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.autoDeleteTopicWithLastSubscriptionInput"></a>

```csharp
public bool|IResolvable AutoDeleteTopicWithLastSubscriptionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.identityInput"></a>

```csharp
public EventgridDomainIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentity">EventgridDomainIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InboundIpRuleInput`<sup>Optional</sup> <a name="InboundIpRuleInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.inboundIpRuleInput"></a>

```csharp
public IResolvable|EventgridDomainInboundIpRule[] InboundIpRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule">EventgridDomainInboundIpRule</a>[]

---

##### `InputMappingDefaultValuesInput`<sup>Optional</sup> <a name="InputMappingDefaultValuesInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.inputMappingDefaultValuesInput"></a>

```csharp
public EventgridDomainInputMappingDefaultValues InputMappingDefaultValuesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues">EventgridDomainInputMappingDefaultValues</a>

---

##### `InputMappingFieldsInput`<sup>Optional</sup> <a name="InputMappingFieldsInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.inputMappingFieldsInput"></a>

```csharp
public EventgridDomainInputMappingFields InputMappingFieldsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields">EventgridDomainInputMappingFields</a>

---

##### `InputSchemaInput`<sup>Optional</sup> <a name="InputSchemaInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.inputSchemaInput"></a>

```csharp
public string InputSchemaInput { get; }
```

- *Type:* string

---

##### `LocalAuthEnabledInput`<sup>Optional</sup> <a name="LocalAuthEnabledInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.localAuthEnabledInput"></a>

```csharp
public bool|IResolvable LocalAuthEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.publicNetworkAccessEnabledInput"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.timeoutsInput"></a>

```csharp
public IResolvable|EventgridDomainTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeouts">EventgridDomainTimeouts</a>

---

##### `AutoCreateTopicWithFirstSubscription`<sup>Required</sup> <a name="AutoCreateTopicWithFirstSubscription" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.autoCreateTopicWithFirstSubscription"></a>

```csharp
public bool|IResolvable AutoCreateTopicWithFirstSubscription { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutoDeleteTopicWithLastSubscription`<sup>Required</sup> <a name="AutoDeleteTopicWithLastSubscription" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.autoDeleteTopicWithLastSubscription"></a>

```csharp
public bool|IResolvable AutoDeleteTopicWithLastSubscription { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InputSchema`<sup>Required</sup> <a name="InputSchema" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.inputSchema"></a>

```csharp
public string InputSchema { get; }
```

- *Type:* string

---

##### `LocalAuthEnabled`<sup>Required</sup> <a name="LocalAuthEnabled" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.localAuthEnabled"></a>

```csharp
public bool|IResolvable LocalAuthEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.publicNetworkAccessEnabled"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventgridDomainConfig <a name="EventgridDomainConfig" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventgridDomainConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Name,
    string ResourceGroupName,
    bool|IResolvable AutoCreateTopicWithFirstSubscription = null,
    bool|IResolvable AutoDeleteTopicWithLastSubscription = null,
    string Id = null,
    EventgridDomainIdentity Identity = null,
    IResolvable|EventgridDomainInboundIpRule[] InboundIpRule = null,
    EventgridDomainInputMappingDefaultValues InputMappingDefaultValues = null,
    EventgridDomainInputMappingFields InputMappingFields = null,
    string InputSchema = null,
    bool|IResolvable LocalAuthEnabled = null,
    bool|IResolvable PublicNetworkAccessEnabled = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    EventgridDomainTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#location EventgridDomain#location}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#name EventgridDomain#name}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#resource_group_name EventgridDomain#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.autoCreateTopicWithFirstSubscription">AutoCreateTopicWithFirstSubscription</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#auto_create_topic_with_first_subscription EventgridDomain#auto_create_topic_with_first_subscription}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.autoDeleteTopicWithLastSubscription">AutoDeleteTopicWithLastSubscription</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#auto_delete_topic_with_last_subscription EventgridDomain#auto_delete_topic_with_last_subscription}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#id EventgridDomain#id}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentity">EventgridDomainIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.inboundIpRule">InboundIpRule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule">EventgridDomainInboundIpRule</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#inbound_ip_rule EventgridDomain#inbound_ip_rule}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.inputMappingDefaultValues">InputMappingDefaultValues</a></code> | <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues">EventgridDomainInputMappingDefaultValues</a></code> | input_mapping_default_values block. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.inputMappingFields">InputMappingFields</a></code> | <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields">EventgridDomainInputMappingFields</a></code> | input_mapping_fields block. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.inputSchema">InputSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#input_schema EventgridDomain#input_schema}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#local_auth_enabled EventgridDomain#local_auth_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#public_network_access_enabled EventgridDomain#public_network_access_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#tags EventgridDomain#tags}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeouts">EventgridDomainTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#location EventgridDomain#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#name EventgridDomain#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#resource_group_name EventgridDomain#resource_group_name}.

---

##### `AutoCreateTopicWithFirstSubscription`<sup>Optional</sup> <a name="AutoCreateTopicWithFirstSubscription" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.autoCreateTopicWithFirstSubscription"></a>

```csharp
public bool|IResolvable AutoCreateTopicWithFirstSubscription { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#auto_create_topic_with_first_subscription EventgridDomain#auto_create_topic_with_first_subscription}.

---

##### `AutoDeleteTopicWithLastSubscription`<sup>Optional</sup> <a name="AutoDeleteTopicWithLastSubscription" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.autoDeleteTopicWithLastSubscription"></a>

```csharp
public bool|IResolvable AutoDeleteTopicWithLastSubscription { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#auto_delete_topic_with_last_subscription EventgridDomain#auto_delete_topic_with_last_subscription}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#id EventgridDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.identity"></a>

```csharp
public EventgridDomainIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentity">EventgridDomainIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#identity EventgridDomain#identity}

---

##### `InboundIpRule`<sup>Optional</sup> <a name="InboundIpRule" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.inboundIpRule"></a>

```csharp
public IResolvable|EventgridDomainInboundIpRule[] InboundIpRule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule">EventgridDomainInboundIpRule</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#inbound_ip_rule EventgridDomain#inbound_ip_rule}.

---

##### `InputMappingDefaultValues`<sup>Optional</sup> <a name="InputMappingDefaultValues" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.inputMappingDefaultValues"></a>

```csharp
public EventgridDomainInputMappingDefaultValues InputMappingDefaultValues { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues">EventgridDomainInputMappingDefaultValues</a>

input_mapping_default_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#input_mapping_default_values EventgridDomain#input_mapping_default_values}

---

##### `InputMappingFields`<sup>Optional</sup> <a name="InputMappingFields" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.inputMappingFields"></a>

```csharp
public EventgridDomainInputMappingFields InputMappingFields { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields">EventgridDomainInputMappingFields</a>

input_mapping_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#input_mapping_fields EventgridDomain#input_mapping_fields}

---

##### `InputSchema`<sup>Optional</sup> <a name="InputSchema" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.inputSchema"></a>

```csharp
public string InputSchema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#input_schema EventgridDomain#input_schema}.

---

##### `LocalAuthEnabled`<sup>Optional</sup> <a name="LocalAuthEnabled" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.localAuthEnabled"></a>

```csharp
public bool|IResolvable LocalAuthEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#local_auth_enabled EventgridDomain#local_auth_enabled}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.publicNetworkAccessEnabled"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#public_network_access_enabled EventgridDomain#public_network_access_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#tags EventgridDomain#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainConfig.property.timeouts"></a>

```csharp
public EventgridDomainTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeouts">EventgridDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#timeouts EventgridDomain#timeouts}

---

### EventgridDomainIdentity <a name="EventgridDomainIdentity" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventgridDomainIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#type EventgridDomain#type}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#identity_ids EventgridDomain#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#type EventgridDomain#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#identity_ids EventgridDomain#identity_ids}.

---

### EventgridDomainInboundIpRule <a name="EventgridDomainInboundIpRule" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventgridDomainInboundIpRule {
    string Action = null,
    string IpMask = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#action EventgridDomain#action}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule.property.ipMask">IpMask</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#ip_mask EventgridDomain#ip_mask}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#action EventgridDomain#action}.

---

##### `IpMask`<sup>Optional</sup> <a name="IpMask" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule.property.ipMask"></a>

```csharp
public string IpMask { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#ip_mask EventgridDomain#ip_mask}.

---

### EventgridDomainInputMappingDefaultValues <a name="EventgridDomainInputMappingDefaultValues" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventgridDomainInputMappingDefaultValues {
    string DataVersion = null,
    string EventType = null,
    string Subject = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues.property.dataVersion">DataVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#data_version EventgridDomain#data_version}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues.property.eventType">EventType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#event_type EventgridDomain#event_type}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues.property.subject">Subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#subject EventgridDomain#subject}. |

---

##### `DataVersion`<sup>Optional</sup> <a name="DataVersion" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues.property.dataVersion"></a>

```csharp
public string DataVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#data_version EventgridDomain#data_version}.

---

##### `EventType`<sup>Optional</sup> <a name="EventType" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues.property.eventType"></a>

```csharp
public string EventType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#event_type EventgridDomain#event_type}.

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues.property.subject"></a>

```csharp
public string Subject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#subject EventgridDomain#subject}.

---

### EventgridDomainInputMappingFields <a name="EventgridDomainInputMappingFields" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventgridDomainInputMappingFields {
    string DataVersion = null,
    string EventTime = null,
    string EventType = null,
    string Id = null,
    string Subject = null,
    string Topic = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields.property.dataVersion">DataVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#data_version EventgridDomain#data_version}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields.property.eventTime">EventTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#event_time EventgridDomain#event_time}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields.property.eventType">EventType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#event_type EventgridDomain#event_type}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#id EventgridDomain#id}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields.property.subject">Subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#subject EventgridDomain#subject}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields.property.topic">Topic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#topic EventgridDomain#topic}. |

---

##### `DataVersion`<sup>Optional</sup> <a name="DataVersion" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields.property.dataVersion"></a>

```csharp
public string DataVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#data_version EventgridDomain#data_version}.

---

##### `EventTime`<sup>Optional</sup> <a name="EventTime" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields.property.eventTime"></a>

```csharp
public string EventTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#event_time EventgridDomain#event_time}.

---

##### `EventType`<sup>Optional</sup> <a name="EventType" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields.property.eventType"></a>

```csharp
public string EventType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#event_type EventgridDomain#event_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#id EventgridDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields.property.subject"></a>

```csharp
public string Subject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#subject EventgridDomain#subject}.

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields.property.topic"></a>

```csharp
public string Topic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#topic EventgridDomain#topic}.

---

### EventgridDomainTimeouts <a name="EventgridDomainTimeouts" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventgridDomainTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#create EventgridDomain#create}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#delete EventgridDomain#delete}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#read EventgridDomain#read}. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#update EventgridDomain#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#create EventgridDomain#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#delete EventgridDomain#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#read EventgridDomain#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_domain#update EventgridDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventgridDomainIdentityOutputReference <a name="EventgridDomainIdentityOutputReference" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventgridDomainIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentity">EventgridDomainIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentityOutputReference.property.internalValue"></a>

```csharp
public EventgridDomainIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainIdentity">EventgridDomainIdentity</a>

---


### EventgridDomainInboundIpRuleList <a name="EventgridDomainInboundIpRuleList" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventgridDomainInboundIpRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.get"></a>

```csharp
private EventgridDomainInboundIpRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule">EventgridDomainInboundIpRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleList.property.internalValue"></a>

```csharp
public IResolvable|EventgridDomainInboundIpRule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule">EventgridDomainInboundIpRule</a>[]

---


### EventgridDomainInboundIpRuleOutputReference <a name="EventgridDomainInboundIpRuleOutputReference" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventgridDomainInboundIpRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.resetIpMask">ResetIpMask</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetIpMask` <a name="ResetIpMask" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.resetIpMask"></a>

```csharp
private void ResetIpMask()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.ipMaskInput">IpMaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.ipMask">IpMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule">EventgridDomainInboundIpRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `IpMaskInput`<sup>Optional</sup> <a name="IpMaskInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.ipMaskInput"></a>

```csharp
public string IpMaskInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `IpMask`<sup>Required</sup> <a name="IpMask" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.ipMask"></a>

```csharp
public string IpMask { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventgridDomainInboundIpRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInboundIpRule">EventgridDomainInboundIpRule</a>

---


### EventgridDomainInputMappingDefaultValuesOutputReference <a name="EventgridDomainInputMappingDefaultValuesOutputReference" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventgridDomainInputMappingDefaultValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.resetDataVersion">ResetDataVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.resetEventType">ResetEventType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.resetSubject">ResetSubject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataVersion` <a name="ResetDataVersion" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.resetDataVersion"></a>

```csharp
private void ResetDataVersion()
```

##### `ResetEventType` <a name="ResetEventType" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.resetEventType"></a>

```csharp
private void ResetEventType()
```

##### `ResetSubject` <a name="ResetSubject" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.resetSubject"></a>

```csharp
private void ResetSubject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.dataVersionInput">DataVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.subjectInput">SubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.dataVersion">DataVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.eventType">EventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues">EventgridDomainInputMappingDefaultValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataVersionInput`<sup>Optional</sup> <a name="DataVersionInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.dataVersionInput"></a>

```csharp
public string DataVersionInput { get; }
```

- *Type:* string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.eventTypeInput"></a>

```csharp
public string EventTypeInput { get; }
```

- *Type:* string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.subjectInput"></a>

```csharp
public string SubjectInput { get; }
```

- *Type:* string

---

##### `DataVersion`<sup>Required</sup> <a name="DataVersion" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.dataVersion"></a>

```csharp
public string DataVersion { get; }
```

- *Type:* string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.eventType"></a>

```csharp
public string EventType { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValuesOutputReference.property.internalValue"></a>

```csharp
public EventgridDomainInputMappingDefaultValues InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingDefaultValues">EventgridDomainInputMappingDefaultValues</a>

---


### EventgridDomainInputMappingFieldsOutputReference <a name="EventgridDomainInputMappingFieldsOutputReference" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventgridDomainInputMappingFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resetDataVersion">ResetDataVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resetEventTime">ResetEventTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resetEventType">ResetEventType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resetSubject">ResetSubject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resetTopic">ResetTopic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataVersion` <a name="ResetDataVersion" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resetDataVersion"></a>

```csharp
private void ResetDataVersion()
```

##### `ResetEventTime` <a name="ResetEventTime" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resetEventTime"></a>

```csharp
private void ResetEventTime()
```

##### `ResetEventType` <a name="ResetEventType" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resetEventType"></a>

```csharp
private void ResetEventType()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSubject` <a name="ResetSubject" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resetSubject"></a>

```csharp
private void ResetSubject()
```

##### `ResetTopic` <a name="ResetTopic" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.resetTopic"></a>

```csharp
private void ResetTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.dataVersionInput">DataVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.eventTimeInput">EventTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.subjectInput">SubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.topicInput">TopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.dataVersion">DataVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.eventTime">EventTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.eventType">EventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields">EventgridDomainInputMappingFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataVersionInput`<sup>Optional</sup> <a name="DataVersionInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.dataVersionInput"></a>

```csharp
public string DataVersionInput { get; }
```

- *Type:* string

---

##### `EventTimeInput`<sup>Optional</sup> <a name="EventTimeInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.eventTimeInput"></a>

```csharp
public string EventTimeInput { get; }
```

- *Type:* string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.eventTypeInput"></a>

```csharp
public string EventTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.subjectInput"></a>

```csharp
public string SubjectInput { get; }
```

- *Type:* string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.topicInput"></a>

```csharp
public string TopicInput { get; }
```

- *Type:* string

---

##### `DataVersion`<sup>Required</sup> <a name="DataVersion" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.dataVersion"></a>

```csharp
public string DataVersion { get; }
```

- *Type:* string

---

##### `EventTime`<sup>Required</sup> <a name="EventTime" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.eventTime"></a>

```csharp
public string EventTime { get; }
```

- *Type:* string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.eventType"></a>

```csharp
public string EventType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFieldsOutputReference.property.internalValue"></a>

```csharp
public EventgridDomainInputMappingFields InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainInputMappingFields">EventgridDomainInputMappingFields</a>

---


### EventgridDomainTimeoutsOutputReference <a name="EventgridDomainTimeoutsOutputReference" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventgridDomainTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeouts">EventgridDomainTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventgridDomainTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventgridDomain.EventgridDomainTimeouts">EventgridDomainTimeouts</a>

---



