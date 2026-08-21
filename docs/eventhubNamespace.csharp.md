# `eventhubNamespace` Submodule <a name="`eventhubNamespace` Submodule" id="@cdktn/provider-azurerm.eventhubNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventhubNamespace <a name="EventhubNamespace" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace azurerm_eventhub_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventhubNamespace(Construct Scope, string Id, EventhubNamespaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig">EventhubNamespaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig">EventhubNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.putNetworkRulesets">PutNetworkRulesets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.resetAutoInflateEnabled">ResetAutoInflateEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.resetCapacity">ResetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.resetDedicatedClusterId">ResetDedicatedClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.resetLocalAuthenticationEnabled">ResetLocalAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.resetMaximumThroughputUnits">ResetMaximumThroughputUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.resetMinimumTlsVersion">ResetMinimumTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.resetNetworkRulesets">ResetNetworkRulesets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.putIdentity"></a>

```csharp
private void PutIdentity(EventhubNamespaceIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity">EventhubNamespaceIdentity</a>

---

##### `PutNetworkRulesets` <a name="PutNetworkRulesets" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.putNetworkRulesets"></a>

```csharp
private void PutNetworkRulesets(IResolvable|EventhubNamespaceNetworkRulesets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.putNetworkRulesets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.putTimeouts"></a>

```csharp
private void PutTimeouts(EventhubNamespaceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts">EventhubNamespaceTimeouts</a>

---

##### `ResetAutoInflateEnabled` <a name="ResetAutoInflateEnabled" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.resetAutoInflateEnabled"></a>

```csharp
private void ResetAutoInflateEnabled()
```

##### `ResetCapacity` <a name="ResetCapacity" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.resetCapacity"></a>

```csharp
private void ResetCapacity()
```

##### `ResetDedicatedClusterId` <a name="ResetDedicatedClusterId" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.resetDedicatedClusterId"></a>

```csharp
private void ResetDedicatedClusterId()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetLocalAuthenticationEnabled` <a name="ResetLocalAuthenticationEnabled" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.resetLocalAuthenticationEnabled"></a>

```csharp
private void ResetLocalAuthenticationEnabled()
```

##### `ResetMaximumThroughputUnits` <a name="ResetMaximumThroughputUnits" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.resetMaximumThroughputUnits"></a>

```csharp
private void ResetMaximumThroughputUnits()
```

##### `ResetMinimumTlsVersion` <a name="ResetMinimumTlsVersion" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.resetMinimumTlsVersion"></a>

```csharp
private void ResetMinimumTlsVersion()
```

##### `ResetNetworkRulesets` <a name="ResetNetworkRulesets" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.resetNetworkRulesets"></a>

```csharp
private void ResetNetworkRulesets()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.resetPublicNetworkAccessEnabled"></a>

```csharp
private void ResetPublicNetworkAccessEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EventhubNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

EventhubNamespace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

EventhubNamespace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

EventhubNamespace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

EventhubNamespace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EventhubNamespace resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventhubNamespace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventhubNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EventhubNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultPrimaryConnectionString">DefaultPrimaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultPrimaryConnectionStringAlias">DefaultPrimaryConnectionStringAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultPrimaryKey">DefaultPrimaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultSecondaryConnectionString">DefaultSecondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultSecondaryConnectionStringAlias">DefaultSecondaryConnectionStringAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultSecondaryKey">DefaultSecondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference">EventhubNamespaceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.networkRulesets">NetworkRulesets</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList">EventhubNamespaceNetworkRulesetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference">EventhubNamespaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.autoInflateEnabledInput">AutoInflateEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.capacityInput">CapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.dedicatedClusterIdInput">DedicatedClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity">EventhubNamespaceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.localAuthenticationEnabledInput">LocalAuthenticationEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.maximumThroughputUnitsInput">MaximumThroughputUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.minimumTlsVersionInput">MinimumTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.networkRulesetsInput">NetworkRulesetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts">EventhubNamespaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.autoInflateEnabled">AutoInflateEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.capacity">Capacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.dedicatedClusterId">DedicatedClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.localAuthenticationEnabled">LocalAuthenticationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.maximumThroughputUnits">MaximumThroughputUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.minimumTlsVersion">MinimumTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DefaultPrimaryConnectionString`<sup>Required</sup> <a name="DefaultPrimaryConnectionString" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultPrimaryConnectionString"></a>

```csharp
public string DefaultPrimaryConnectionString { get; }
```

- *Type:* string

---

##### `DefaultPrimaryConnectionStringAlias`<sup>Required</sup> <a name="DefaultPrimaryConnectionStringAlias" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultPrimaryConnectionStringAlias"></a>

```csharp
public string DefaultPrimaryConnectionStringAlias { get; }
```

- *Type:* string

---

##### `DefaultPrimaryKey`<sup>Required</sup> <a name="DefaultPrimaryKey" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultPrimaryKey"></a>

```csharp
public string DefaultPrimaryKey { get; }
```

- *Type:* string

---

##### `DefaultSecondaryConnectionString`<sup>Required</sup> <a name="DefaultSecondaryConnectionString" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultSecondaryConnectionString"></a>

```csharp
public string DefaultSecondaryConnectionString { get; }
```

- *Type:* string

---

##### `DefaultSecondaryConnectionStringAlias`<sup>Required</sup> <a name="DefaultSecondaryConnectionStringAlias" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultSecondaryConnectionStringAlias"></a>

```csharp
public string DefaultSecondaryConnectionStringAlias { get; }
```

- *Type:* string

---

##### `DefaultSecondaryKey`<sup>Required</sup> <a name="DefaultSecondaryKey" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.defaultSecondaryKey"></a>

```csharp
public string DefaultSecondaryKey { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.identity"></a>

```csharp
public EventhubNamespaceIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference">EventhubNamespaceIdentityOutputReference</a>

---

##### `NetworkRulesets`<sup>Required</sup> <a name="NetworkRulesets" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.networkRulesets"></a>

```csharp
public EventhubNamespaceNetworkRulesetsList NetworkRulesets { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList">EventhubNamespaceNetworkRulesetsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.timeouts"></a>

```csharp
public EventhubNamespaceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference">EventhubNamespaceTimeoutsOutputReference</a>

---

##### `AutoInflateEnabledInput`<sup>Optional</sup> <a name="AutoInflateEnabledInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.autoInflateEnabledInput"></a>

```csharp
public bool|IResolvable AutoInflateEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.capacityInput"></a>

```csharp
public double CapacityInput { get; }
```

- *Type:* double

---

##### `DedicatedClusterIdInput`<sup>Optional</sup> <a name="DedicatedClusterIdInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.dedicatedClusterIdInput"></a>

```csharp
public string DedicatedClusterIdInput { get; }
```

- *Type:* string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.identityInput"></a>

```csharp
public EventhubNamespaceIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity">EventhubNamespaceIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocalAuthenticationEnabledInput`<sup>Optional</sup> <a name="LocalAuthenticationEnabledInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.localAuthenticationEnabledInput"></a>

```csharp
public bool|IResolvable LocalAuthenticationEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MaximumThroughputUnitsInput`<sup>Optional</sup> <a name="MaximumThroughputUnitsInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.maximumThroughputUnitsInput"></a>

```csharp
public double MaximumThroughputUnitsInput { get; }
```

- *Type:* double

---

##### `MinimumTlsVersionInput`<sup>Optional</sup> <a name="MinimumTlsVersionInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.minimumTlsVersionInput"></a>

```csharp
public string MinimumTlsVersionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkRulesetsInput`<sup>Optional</sup> <a name="NetworkRulesetsInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.networkRulesetsInput"></a>

```csharp
public IResolvable|EventhubNamespaceNetworkRulesets[] NetworkRulesetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a>[]

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.publicNetworkAccessEnabledInput"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.timeoutsInput"></a>

```csharp
public IResolvable|EventhubNamespaceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts">EventhubNamespaceTimeouts</a>

---

##### `AutoInflateEnabled`<sup>Required</sup> <a name="AutoInflateEnabled" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.autoInflateEnabled"></a>

```csharp
public bool|IResolvable AutoInflateEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.capacity"></a>

```csharp
public double Capacity { get; }
```

- *Type:* double

---

##### `DedicatedClusterId`<sup>Required</sup> <a name="DedicatedClusterId" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.dedicatedClusterId"></a>

```csharp
public string DedicatedClusterId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocalAuthenticationEnabled`<sup>Required</sup> <a name="LocalAuthenticationEnabled" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.localAuthenticationEnabled"></a>

```csharp
public bool|IResolvable LocalAuthenticationEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MaximumThroughputUnits`<sup>Required</sup> <a name="MaximumThroughputUnits" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.maximumThroughputUnits"></a>

```csharp
public double MaximumThroughputUnits { get; }
```

- *Type:* double

---

##### `MinimumTlsVersion`<sup>Required</sup> <a name="MinimumTlsVersion" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.minimumTlsVersion"></a>

```csharp
public string MinimumTlsVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.publicNetworkAccessEnabled"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventhubNamespaceConfig <a name="EventhubNamespaceConfig" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventhubNamespaceConfig {
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
    string Sku,
    bool|IResolvable AutoInflateEnabled = null,
    double Capacity = null,
    string DedicatedClusterId = null,
    string Id = null,
    EventhubNamespaceIdentity Identity = null,
    bool|IResolvable LocalAuthenticationEnabled = null,
    double MaximumThroughputUnits = null,
    string MinimumTlsVersion = null,
    IResolvable|EventhubNamespaceNetworkRulesets[] NetworkRulesets = null,
    bool|IResolvable PublicNetworkAccessEnabled = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    EventhubNamespaceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#location EventhubNamespace#location}. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#name EventhubNamespace#name}. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#resource_group_name EventhubNamespace#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#sku EventhubNamespace#sku}. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.autoInflateEnabled">AutoInflateEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#auto_inflate_enabled EventhubNamespace#auto_inflate_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.capacity">Capacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#capacity EventhubNamespace#capacity}. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.dedicatedClusterId">DedicatedClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#dedicated_cluster_id EventhubNamespace#dedicated_cluster_id}. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#id EventhubNamespace#id}. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity">EventhubNamespaceIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.localAuthenticationEnabled">LocalAuthenticationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#local_authentication_enabled EventhubNamespace#local_authentication_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.maximumThroughputUnits">MaximumThroughputUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#maximum_throughput_units EventhubNamespace#maximum_throughput_units}. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.minimumTlsVersion">MinimumTlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#minimum_tls_version EventhubNamespace#minimum_tls_version}. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.networkRulesets">NetworkRulesets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#network_rulesets EventhubNamespace#network_rulesets}. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#public_network_access_enabled EventhubNamespace#public_network_access_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#tags EventhubNamespace#tags}. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts">EventhubNamespaceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#location EventhubNamespace#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#name EventhubNamespace#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#resource_group_name EventhubNamespace#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#sku EventhubNamespace#sku}.

---

##### `AutoInflateEnabled`<sup>Optional</sup> <a name="AutoInflateEnabled" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.autoInflateEnabled"></a>

```csharp
public bool|IResolvable AutoInflateEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#auto_inflate_enabled EventhubNamespace#auto_inflate_enabled}.

---

##### `Capacity`<sup>Optional</sup> <a name="Capacity" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.capacity"></a>

```csharp
public double Capacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#capacity EventhubNamespace#capacity}.

---

##### `DedicatedClusterId`<sup>Optional</sup> <a name="DedicatedClusterId" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.dedicatedClusterId"></a>

```csharp
public string DedicatedClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#dedicated_cluster_id EventhubNamespace#dedicated_cluster_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#id EventhubNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.identity"></a>

```csharp
public EventhubNamespaceIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity">EventhubNamespaceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#identity EventhubNamespace#identity}

---

##### `LocalAuthenticationEnabled`<sup>Optional</sup> <a name="LocalAuthenticationEnabled" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.localAuthenticationEnabled"></a>

```csharp
public bool|IResolvable LocalAuthenticationEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#local_authentication_enabled EventhubNamespace#local_authentication_enabled}.

---

##### `MaximumThroughputUnits`<sup>Optional</sup> <a name="MaximumThroughputUnits" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.maximumThroughputUnits"></a>

```csharp
public double MaximumThroughputUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#maximum_throughput_units EventhubNamespace#maximum_throughput_units}.

---

##### `MinimumTlsVersion`<sup>Optional</sup> <a name="MinimumTlsVersion" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.minimumTlsVersion"></a>

```csharp
public string MinimumTlsVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#minimum_tls_version EventhubNamespace#minimum_tls_version}.

---

##### `NetworkRulesets`<sup>Optional</sup> <a name="NetworkRulesets" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.networkRulesets"></a>

```csharp
public IResolvable|EventhubNamespaceNetworkRulesets[] NetworkRulesets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#network_rulesets EventhubNamespace#network_rulesets}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.publicNetworkAccessEnabled"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#public_network_access_enabled EventhubNamespace#public_network_access_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#tags EventhubNamespace#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceConfig.property.timeouts"></a>

```csharp
public EventhubNamespaceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts">EventhubNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#timeouts EventhubNamespace#timeouts}

---

### EventhubNamespaceIdentity <a name="EventhubNamespaceIdentity" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventhubNamespaceIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#type EventhubNamespace#type}. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#identity_ids EventhubNamespace#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#type EventhubNamespace#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#identity_ids EventhubNamespace#identity_ids}.

---

### EventhubNamespaceNetworkRulesets <a name="EventhubNamespaceNetworkRulesets" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventhubNamespaceNetworkRulesets {
    string DefaultAction = null,
    IResolvable|EventhubNamespaceNetworkRulesetsIpRule[] IpRule = null,
    bool|IResolvable PublicNetworkAccessEnabled = null,
    bool|IResolvable TrustedServiceAccessEnabled = null,
    IResolvable|EventhubNamespaceNetworkRulesetsVirtualNetworkRule[] VirtualNetworkRule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.defaultAction">DefaultAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#default_action EventhubNamespace#default_action}. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.ipRule">IpRule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#ip_rule EventhubNamespace#ip_rule}. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#public_network_access_enabled EventhubNamespace#public_network_access_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.trustedServiceAccessEnabled">TrustedServiceAccessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#trusted_service_access_enabled EventhubNamespace#trusted_service_access_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.virtualNetworkRule">VirtualNetworkRule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#virtual_network_rule EventhubNamespace#virtual_network_rule}. |

---

##### `DefaultAction`<sup>Optional</sup> <a name="DefaultAction" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.defaultAction"></a>

```csharp
public string DefaultAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#default_action EventhubNamespace#default_action}.

---

##### `IpRule`<sup>Optional</sup> <a name="IpRule" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.ipRule"></a>

```csharp
public IResolvable|EventhubNamespaceNetworkRulesetsIpRule[] IpRule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#ip_rule EventhubNamespace#ip_rule}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.publicNetworkAccessEnabled"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#public_network_access_enabled EventhubNamespace#public_network_access_enabled}.

---

##### `TrustedServiceAccessEnabled`<sup>Optional</sup> <a name="TrustedServiceAccessEnabled" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.trustedServiceAccessEnabled"></a>

```csharp
public bool|IResolvable TrustedServiceAccessEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#trusted_service_access_enabled EventhubNamespace#trusted_service_access_enabled}.

---

##### `VirtualNetworkRule`<sup>Optional</sup> <a name="VirtualNetworkRule" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets.property.virtualNetworkRule"></a>

```csharp
public IResolvable|EventhubNamespaceNetworkRulesetsVirtualNetworkRule[] VirtualNetworkRule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#virtual_network_rule EventhubNamespace#virtual_network_rule}.

---

### EventhubNamespaceNetworkRulesetsIpRule <a name="EventhubNamespaceNetworkRulesetsIpRule" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventhubNamespaceNetworkRulesetsIpRule {
    string Action = null,
    string IpMask = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#action EventhubNamespace#action}. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule.property.ipMask">IpMask</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#ip_mask EventhubNamespace#ip_mask}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#action EventhubNamespace#action}.

---

##### `IpMask`<sup>Optional</sup> <a name="IpMask" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule.property.ipMask"></a>

```csharp
public string IpMask { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#ip_mask EventhubNamespace#ip_mask}.

---

### EventhubNamespaceNetworkRulesetsVirtualNetworkRule <a name="EventhubNamespaceNetworkRulesetsVirtualNetworkRule" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventhubNamespaceNetworkRulesetsVirtualNetworkRule {
    bool|IResolvable IgnoreMissingVirtualNetworkServiceEndpoint = null,
    string SubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule.property.ignoreMissingVirtualNetworkServiceEndpoint">IgnoreMissingVirtualNetworkServiceEndpoint</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#ignore_missing_virtual_network_service_endpoint EventhubNamespace#ignore_missing_virtual_network_service_endpoint}. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#subnet_id EventhubNamespace#subnet_id}. |

---

##### `IgnoreMissingVirtualNetworkServiceEndpoint`<sup>Optional</sup> <a name="IgnoreMissingVirtualNetworkServiceEndpoint" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule.property.ignoreMissingVirtualNetworkServiceEndpoint"></a>

```csharp
public bool|IResolvable IgnoreMissingVirtualNetworkServiceEndpoint { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#ignore_missing_virtual_network_service_endpoint EventhubNamespace#ignore_missing_virtual_network_service_endpoint}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#subnet_id EventhubNamespace#subnet_id}.

---

### EventhubNamespaceTimeouts <a name="EventhubNamespaceTimeouts" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventhubNamespaceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#create EventhubNamespace#create}. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#delete EventhubNamespace#delete}. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#read EventhubNamespace#read}. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#update EventhubNamespace#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#create EventhubNamespace#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#delete EventhubNamespace#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#read EventhubNamespace#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/eventhub_namespace#update EventhubNamespace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventhubNamespaceIdentityOutputReference <a name="EventhubNamespaceIdentityOutputReference" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventhubNamespaceIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity">EventhubNamespaceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentityOutputReference.property.internalValue"></a>

```csharp
public EventhubNamespaceIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceIdentity">EventhubNamespaceIdentity</a>

---


### EventhubNamespaceNetworkRulesetsIpRuleList <a name="EventhubNamespaceNetworkRulesetsIpRuleList" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventhubNamespaceNetworkRulesetsIpRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.get"></a>

```csharp
private EventhubNamespaceNetworkRulesetsIpRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList.property.internalValue"></a>

```csharp
public IResolvable|EventhubNamespaceNetworkRulesetsIpRule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a>[]

---


### EventhubNamespaceNetworkRulesetsIpRuleOutputReference <a name="EventhubNamespaceNetworkRulesetsIpRuleOutputReference" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventhubNamespaceNetworkRulesetsIpRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.resetIpMask">ResetIpMask</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetIpMask` <a name="ResetIpMask" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.resetIpMask"></a>

```csharp
private void ResetIpMask()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.ipMaskInput">IpMaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.ipMask">IpMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `IpMaskInput`<sup>Optional</sup> <a name="IpMaskInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.ipMaskInput"></a>

```csharp
public string IpMaskInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `IpMask`<sup>Required</sup> <a name="IpMask" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.ipMask"></a>

```csharp
public string IpMask { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventhubNamespaceNetworkRulesetsIpRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a>

---


### EventhubNamespaceNetworkRulesetsList <a name="EventhubNamespaceNetworkRulesetsList" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventhubNamespaceNetworkRulesetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.get"></a>

```csharp
private EventhubNamespaceNetworkRulesetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsList.property.internalValue"></a>

```csharp
public IResolvable|EventhubNamespaceNetworkRulesets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a>[]

---


### EventhubNamespaceNetworkRulesetsOutputReference <a name="EventhubNamespaceNetworkRulesetsOutputReference" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventhubNamespaceNetworkRulesetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.putIpRule">PutIpRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.putVirtualNetworkRule">PutVirtualNetworkRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetDefaultAction">ResetDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetIpRule">ResetIpRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetTrustedServiceAccessEnabled">ResetTrustedServiceAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetVirtualNetworkRule">ResetVirtualNetworkRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpRule` <a name="PutIpRule" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.putIpRule"></a>

```csharp
private void PutIpRule(IResolvable|EventhubNamespaceNetworkRulesetsIpRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.putIpRule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a>[]

---

##### `PutVirtualNetworkRule` <a name="PutVirtualNetworkRule" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.putVirtualNetworkRule"></a>

```csharp
private void PutVirtualNetworkRule(IResolvable|EventhubNamespaceNetworkRulesetsVirtualNetworkRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.putVirtualNetworkRule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a>[]

---

##### `ResetDefaultAction` <a name="ResetDefaultAction" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetDefaultAction"></a>

```csharp
private void ResetDefaultAction()
```

##### `ResetIpRule` <a name="ResetIpRule" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetIpRule"></a>

```csharp
private void ResetIpRule()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetPublicNetworkAccessEnabled"></a>

```csharp
private void ResetPublicNetworkAccessEnabled()
```

##### `ResetTrustedServiceAccessEnabled` <a name="ResetTrustedServiceAccessEnabled" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetTrustedServiceAccessEnabled"></a>

```csharp
private void ResetTrustedServiceAccessEnabled()
```

##### `ResetVirtualNetworkRule` <a name="ResetVirtualNetworkRule" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.resetVirtualNetworkRule"></a>

```csharp
private void ResetVirtualNetworkRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.ipRule">IpRule</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList">EventhubNamespaceNetworkRulesetsIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.virtualNetworkRule">VirtualNetworkRule</a></code> | <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList">EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.defaultActionInput">DefaultActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.ipRuleInput">IpRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.trustedServiceAccessEnabledInput">TrustedServiceAccessEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.virtualNetworkRuleInput">VirtualNetworkRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.defaultAction">DefaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.trustedServiceAccessEnabled">TrustedServiceAccessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpRule`<sup>Required</sup> <a name="IpRule" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.ipRule"></a>

```csharp
public EventhubNamespaceNetworkRulesetsIpRuleList IpRule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRuleList">EventhubNamespaceNetworkRulesetsIpRuleList</a>

---

##### `VirtualNetworkRule`<sup>Required</sup> <a name="VirtualNetworkRule" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.virtualNetworkRule"></a>

```csharp
public EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList VirtualNetworkRule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList">EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList</a>

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.defaultActionInput"></a>

```csharp
public string DefaultActionInput { get; }
```

- *Type:* string

---

##### `IpRuleInput`<sup>Optional</sup> <a name="IpRuleInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.ipRuleInput"></a>

```csharp
public IResolvable|EventhubNamespaceNetworkRulesetsIpRule[] IpRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsIpRule">EventhubNamespaceNetworkRulesetsIpRule</a>[]

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.publicNetworkAccessEnabledInput"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TrustedServiceAccessEnabledInput`<sup>Optional</sup> <a name="TrustedServiceAccessEnabledInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.trustedServiceAccessEnabledInput"></a>

```csharp
public bool|IResolvable TrustedServiceAccessEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VirtualNetworkRuleInput`<sup>Optional</sup> <a name="VirtualNetworkRuleInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.virtualNetworkRuleInput"></a>

```csharp
public IResolvable|EventhubNamespaceNetworkRulesetsVirtualNetworkRule[] VirtualNetworkRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a>[]

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.defaultAction"></a>

```csharp
public string DefaultAction { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.publicNetworkAccessEnabled"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TrustedServiceAccessEnabled`<sup>Required</sup> <a name="TrustedServiceAccessEnabled" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.trustedServiceAccessEnabled"></a>

```csharp
public bool|IResolvable TrustedServiceAccessEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventhubNamespaceNetworkRulesets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesets">EventhubNamespaceNetworkRulesets</a>

---


### EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList <a name="EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.get"></a>

```csharp
private EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleList.property.internalValue"></a>

```csharp
public IResolvable|EventhubNamespaceNetworkRulesetsVirtualNetworkRule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a>[]

---


### EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference <a name="EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.resetIgnoreMissingVirtualNetworkServiceEndpoint">ResetIgnoreMissingVirtualNetworkServiceEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIgnoreMissingVirtualNetworkServiceEndpoint` <a name="ResetIgnoreMissingVirtualNetworkServiceEndpoint" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.resetIgnoreMissingVirtualNetworkServiceEndpoint"></a>

```csharp
private void ResetIgnoreMissingVirtualNetworkServiceEndpoint()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.ignoreMissingVirtualNetworkServiceEndpointInput">IgnoreMissingVirtualNetworkServiceEndpointInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.ignoreMissingVirtualNetworkServiceEndpoint">IgnoreMissingVirtualNetworkServiceEndpoint</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IgnoreMissingVirtualNetworkServiceEndpointInput`<sup>Optional</sup> <a name="IgnoreMissingVirtualNetworkServiceEndpointInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.ignoreMissingVirtualNetworkServiceEndpointInput"></a>

```csharp
public bool|IResolvable IgnoreMissingVirtualNetworkServiceEndpointInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `IgnoreMissingVirtualNetworkServiceEndpoint`<sup>Required</sup> <a name="IgnoreMissingVirtualNetworkServiceEndpoint" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.ignoreMissingVirtualNetworkServiceEndpoint"></a>

```csharp
public bool|IResolvable IgnoreMissingVirtualNetworkServiceEndpoint { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventhubNamespaceNetworkRulesetsVirtualNetworkRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceNetworkRulesetsVirtualNetworkRule">EventhubNamespaceNetworkRulesetsVirtualNetworkRule</a>

---


### EventhubNamespaceTimeoutsOutputReference <a name="EventhubNamespaceTimeoutsOutputReference" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new EventhubNamespaceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts">EventhubNamespaceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EventhubNamespaceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.eventhubNamespace.EventhubNamespaceTimeouts">EventhubNamespaceTimeouts</a>

---



