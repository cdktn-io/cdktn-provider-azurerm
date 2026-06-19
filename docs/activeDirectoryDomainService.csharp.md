# `activeDirectoryDomainService` Submodule <a name="`activeDirectoryDomainService` Submodule" id="@cdktn/provider-azurerm.activeDirectoryDomainService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActiveDirectoryDomainService <a name="ActiveDirectoryDomainService" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service azurerm_active_directory_domain_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ActiveDirectoryDomainService(Construct Scope, string Id, ActiveDirectoryDomainServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig">ActiveDirectoryDomainServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig">ActiveDirectoryDomainServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putInitialReplicaSet">PutInitialReplicaSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putNotifications">PutNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putSecureLdap">PutSecureLdap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putSecurity">PutSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetDomainConfigurationType">ResetDomainConfigurationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetFilteredSyncEnabled">ResetFilteredSyncEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetNotifications">ResetNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetSecureLdap">ResetSecureLdap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetSecurity">ResetSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInitialReplicaSet` <a name="PutInitialReplicaSet" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putInitialReplicaSet"></a>

```csharp
private void PutInitialReplicaSet(ActiveDirectoryDomainServiceInitialReplicaSet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putInitialReplicaSet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet">ActiveDirectoryDomainServiceInitialReplicaSet</a>

---

##### `PutNotifications` <a name="PutNotifications" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putNotifications"></a>

```csharp
private void PutNotifications(ActiveDirectoryDomainServiceNotifications Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications">ActiveDirectoryDomainServiceNotifications</a>

---

##### `PutSecureLdap` <a name="PutSecureLdap" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putSecureLdap"></a>

```csharp
private void PutSecureLdap(ActiveDirectoryDomainServiceSecureLdap Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putSecureLdap.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap">ActiveDirectoryDomainServiceSecureLdap</a>

---

##### `PutSecurity` <a name="PutSecurity" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putSecurity"></a>

```csharp
private void PutSecurity(ActiveDirectoryDomainServiceSecurity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity">ActiveDirectoryDomainServiceSecurity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putTimeouts"></a>

```csharp
private void PutTimeouts(ActiveDirectoryDomainServiceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts">ActiveDirectoryDomainServiceTimeouts</a>

---

##### `ResetDomainConfigurationType` <a name="ResetDomainConfigurationType" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetDomainConfigurationType"></a>

```csharp
private void ResetDomainConfigurationType()
```

##### `ResetFilteredSyncEnabled` <a name="ResetFilteredSyncEnabled" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetFilteredSyncEnabled"></a>

```csharp
private void ResetFilteredSyncEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNotifications` <a name="ResetNotifications" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetNotifications"></a>

```csharp
private void ResetNotifications()
```

##### `ResetSecureLdap` <a name="ResetSecureLdap" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetSecureLdap"></a>

```csharp
private void ResetSecureLdap()
```

##### `ResetSecurity` <a name="ResetSecurity" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetSecurity"></a>

```csharp
private void ResetSecurity()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ActiveDirectoryDomainService resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ActiveDirectoryDomainService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ActiveDirectoryDomainService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ActiveDirectoryDomainService.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

ActiveDirectoryDomainService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ActiveDirectoryDomainService resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ActiveDirectoryDomainService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ActiveDirectoryDomainService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ActiveDirectoryDomainService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.initialReplicaSet">InitialReplicaSet</a></code> | <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference">ActiveDirectoryDomainServiceInitialReplicaSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.notifications">Notifications</a></code> | <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference">ActiveDirectoryDomainServiceNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.secureLdap">SecureLdap</a></code> | <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference">ActiveDirectoryDomainServiceSecureLdapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.security">Security</a></code> | <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference">ActiveDirectoryDomainServiceSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.syncOwner">SyncOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference">ActiveDirectoryDomainServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.domainConfigurationTypeInput">DomainConfigurationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.filteredSyncEnabledInput">FilteredSyncEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.initialReplicaSetInput">InitialReplicaSetInput</a></code> | <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet">ActiveDirectoryDomainServiceInitialReplicaSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.notificationsInput">NotificationsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications">ActiveDirectoryDomainServiceNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.secureLdapInput">SecureLdapInput</a></code> | <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap">ActiveDirectoryDomainServiceSecureLdap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.securityInput">SecurityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity">ActiveDirectoryDomainServiceSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts">ActiveDirectoryDomainServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.domainConfigurationType">DomainConfigurationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.filteredSyncEnabled">FilteredSyncEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `InitialReplicaSet`<sup>Required</sup> <a name="InitialReplicaSet" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.initialReplicaSet"></a>

```csharp
public ActiveDirectoryDomainServiceInitialReplicaSetOutputReference InitialReplicaSet { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference">ActiveDirectoryDomainServiceInitialReplicaSetOutputReference</a>

---

##### `Notifications`<sup>Required</sup> <a name="Notifications" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.notifications"></a>

```csharp
public ActiveDirectoryDomainServiceNotificationsOutputReference Notifications { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference">ActiveDirectoryDomainServiceNotificationsOutputReference</a>

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `SecureLdap`<sup>Required</sup> <a name="SecureLdap" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.secureLdap"></a>

```csharp
public ActiveDirectoryDomainServiceSecureLdapOutputReference SecureLdap { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference">ActiveDirectoryDomainServiceSecureLdapOutputReference</a>

---

##### `Security`<sup>Required</sup> <a name="Security" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.security"></a>

```csharp
public ActiveDirectoryDomainServiceSecurityOutputReference Security { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference">ActiveDirectoryDomainServiceSecurityOutputReference</a>

---

##### `SyncOwner`<sup>Required</sup> <a name="SyncOwner" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.syncOwner"></a>

```csharp
public string SyncOwner { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.timeouts"></a>

```csharp
public ActiveDirectoryDomainServiceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference">ActiveDirectoryDomainServiceTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `DomainConfigurationTypeInput`<sup>Optional</sup> <a name="DomainConfigurationTypeInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.domainConfigurationTypeInput"></a>

```csharp
public string DomainConfigurationTypeInput { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `FilteredSyncEnabledInput`<sup>Optional</sup> <a name="FilteredSyncEnabledInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.filteredSyncEnabledInput"></a>

```csharp
public bool|IResolvable FilteredSyncEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InitialReplicaSetInput`<sup>Optional</sup> <a name="InitialReplicaSetInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.initialReplicaSetInput"></a>

```csharp
public ActiveDirectoryDomainServiceInitialReplicaSet InitialReplicaSetInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet">ActiveDirectoryDomainServiceInitialReplicaSet</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationsInput`<sup>Optional</sup> <a name="NotificationsInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.notificationsInput"></a>

```csharp
public ActiveDirectoryDomainServiceNotifications NotificationsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications">ActiveDirectoryDomainServiceNotifications</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SecureLdapInput`<sup>Optional</sup> <a name="SecureLdapInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.secureLdapInput"></a>

```csharp
public ActiveDirectoryDomainServiceSecureLdap SecureLdapInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap">ActiveDirectoryDomainServiceSecureLdap</a>

---

##### `SecurityInput`<sup>Optional</sup> <a name="SecurityInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.securityInput"></a>

```csharp
public ActiveDirectoryDomainServiceSecurity SecurityInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity">ActiveDirectoryDomainServiceSecurity</a>

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.timeoutsInput"></a>

```csharp
public IResolvable|ActiveDirectoryDomainServiceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts">ActiveDirectoryDomainServiceTimeouts</a>

---

##### `DomainConfigurationType`<sup>Required</sup> <a name="DomainConfigurationType" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.domainConfigurationType"></a>

```csharp
public string DomainConfigurationType { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `FilteredSyncEnabled`<sup>Required</sup> <a name="FilteredSyncEnabled" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.filteredSyncEnabled"></a>

```csharp
public bool|IResolvable FilteredSyncEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActiveDirectoryDomainServiceConfig <a name="ActiveDirectoryDomainServiceConfig" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ActiveDirectoryDomainServiceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainName,
    ActiveDirectoryDomainServiceInitialReplicaSet InitialReplicaSet,
    string Location,
    string Name,
    string ResourceGroupName,
    string Sku,
    string DomainConfigurationType = null,
    bool|IResolvable FilteredSyncEnabled = null,
    string Id = null,
    ActiveDirectoryDomainServiceNotifications Notifications = null,
    ActiveDirectoryDomainServiceSecureLdap SecureLdap = null,
    ActiveDirectoryDomainServiceSecurity Security = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ActiveDirectoryDomainServiceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#domain_name ActiveDirectoryDomainService#domain_name}. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.initialReplicaSet">InitialReplicaSet</a></code> | <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet">ActiveDirectoryDomainServiceInitialReplicaSet</a></code> | initial_replica_set block. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#location ActiveDirectoryDomainService#location}. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#name ActiveDirectoryDomainService#name}. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#resource_group_name ActiveDirectoryDomainService#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#sku ActiveDirectoryDomainService#sku}. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.domainConfigurationType">DomainConfigurationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#domain_configuration_type ActiveDirectoryDomainService#domain_configuration_type}. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.filteredSyncEnabled">FilteredSyncEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#filtered_sync_enabled ActiveDirectoryDomainService#filtered_sync_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#id ActiveDirectoryDomainService#id}. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.notifications">Notifications</a></code> | <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications">ActiveDirectoryDomainServiceNotifications</a></code> | notifications block. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.secureLdap">SecureLdap</a></code> | <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap">ActiveDirectoryDomainServiceSecureLdap</a></code> | secure_ldap block. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.security">Security</a></code> | <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity">ActiveDirectoryDomainServiceSecurity</a></code> | security block. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#tags ActiveDirectoryDomainService#tags}. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts">ActiveDirectoryDomainServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#domain_name ActiveDirectoryDomainService#domain_name}.

---

##### `InitialReplicaSet`<sup>Required</sup> <a name="InitialReplicaSet" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.initialReplicaSet"></a>

```csharp
public ActiveDirectoryDomainServiceInitialReplicaSet InitialReplicaSet { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet">ActiveDirectoryDomainServiceInitialReplicaSet</a>

initial_replica_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#initial_replica_set ActiveDirectoryDomainService#initial_replica_set}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#location ActiveDirectoryDomainService#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#name ActiveDirectoryDomainService#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#resource_group_name ActiveDirectoryDomainService#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#sku ActiveDirectoryDomainService#sku}.

---

##### `DomainConfigurationType`<sup>Optional</sup> <a name="DomainConfigurationType" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.domainConfigurationType"></a>

```csharp
public string DomainConfigurationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#domain_configuration_type ActiveDirectoryDomainService#domain_configuration_type}.

---

##### `FilteredSyncEnabled`<sup>Optional</sup> <a name="FilteredSyncEnabled" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.filteredSyncEnabled"></a>

```csharp
public bool|IResolvable FilteredSyncEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#filtered_sync_enabled ActiveDirectoryDomainService#filtered_sync_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#id ActiveDirectoryDomainService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Notifications`<sup>Optional</sup> <a name="Notifications" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.notifications"></a>

```csharp
public ActiveDirectoryDomainServiceNotifications Notifications { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications">ActiveDirectoryDomainServiceNotifications</a>

notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#notifications ActiveDirectoryDomainService#notifications}

---

##### `SecureLdap`<sup>Optional</sup> <a name="SecureLdap" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.secureLdap"></a>

```csharp
public ActiveDirectoryDomainServiceSecureLdap SecureLdap { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap">ActiveDirectoryDomainServiceSecureLdap</a>

secure_ldap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#secure_ldap ActiveDirectoryDomainService#secure_ldap}

---

##### `Security`<sup>Optional</sup> <a name="Security" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.security"></a>

```csharp
public ActiveDirectoryDomainServiceSecurity Security { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity">ActiveDirectoryDomainServiceSecurity</a>

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#security ActiveDirectoryDomainService#security}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#tags ActiveDirectoryDomainService#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceConfig.property.timeouts"></a>

```csharp
public ActiveDirectoryDomainServiceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts">ActiveDirectoryDomainServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#timeouts ActiveDirectoryDomainService#timeouts}

---

### ActiveDirectoryDomainServiceInitialReplicaSet <a name="ActiveDirectoryDomainServiceInitialReplicaSet" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ActiveDirectoryDomainServiceInitialReplicaSet {
    string SubnetId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#subnet_id ActiveDirectoryDomainService#subnet_id}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#subnet_id ActiveDirectoryDomainService#subnet_id}.

---

### ActiveDirectoryDomainServiceNotifications <a name="ActiveDirectoryDomainServiceNotifications" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ActiveDirectoryDomainServiceNotifications {
    string[] AdditionalRecipients = null,
    bool|IResolvable NotifyDcAdmins = null,
    bool|IResolvable NotifyGlobalAdmins = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications.property.additionalRecipients">AdditionalRecipients</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#additional_recipients ActiveDirectoryDomainService#additional_recipients}. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications.property.notifyDcAdmins">NotifyDcAdmins</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#notify_dc_admins ActiveDirectoryDomainService#notify_dc_admins}. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications.property.notifyGlobalAdmins">NotifyGlobalAdmins</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#notify_global_admins ActiveDirectoryDomainService#notify_global_admins}. |

---

##### `AdditionalRecipients`<sup>Optional</sup> <a name="AdditionalRecipients" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications.property.additionalRecipients"></a>

```csharp
public string[] AdditionalRecipients { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#additional_recipients ActiveDirectoryDomainService#additional_recipients}.

---

##### `NotifyDcAdmins`<sup>Optional</sup> <a name="NotifyDcAdmins" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications.property.notifyDcAdmins"></a>

```csharp
public bool|IResolvable NotifyDcAdmins { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#notify_dc_admins ActiveDirectoryDomainService#notify_dc_admins}.

---

##### `NotifyGlobalAdmins`<sup>Optional</sup> <a name="NotifyGlobalAdmins" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications.property.notifyGlobalAdmins"></a>

```csharp
public bool|IResolvable NotifyGlobalAdmins { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#notify_global_admins ActiveDirectoryDomainService#notify_global_admins}.

---

### ActiveDirectoryDomainServiceSecureLdap <a name="ActiveDirectoryDomainServiceSecureLdap" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ActiveDirectoryDomainServiceSecureLdap {
    bool|IResolvable Enabled,
    string PfxCertificate,
    string PfxCertificatePassword,
    bool|IResolvable ExternalAccessEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#enabled ActiveDirectoryDomainService#enabled}. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.property.pfxCertificate">PfxCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#pfx_certificate ActiveDirectoryDomainService#pfx_certificate}. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.property.pfxCertificatePassword">PfxCertificatePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#pfx_certificate_password ActiveDirectoryDomainService#pfx_certificate_password}. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.property.externalAccessEnabled">ExternalAccessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#external_access_enabled ActiveDirectoryDomainService#external_access_enabled}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#enabled ActiveDirectoryDomainService#enabled}.

---

##### `PfxCertificate`<sup>Required</sup> <a name="PfxCertificate" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.property.pfxCertificate"></a>

```csharp
public string PfxCertificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#pfx_certificate ActiveDirectoryDomainService#pfx_certificate}.

---

##### `PfxCertificatePassword`<sup>Required</sup> <a name="PfxCertificatePassword" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.property.pfxCertificatePassword"></a>

```csharp
public string PfxCertificatePassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#pfx_certificate_password ActiveDirectoryDomainService#pfx_certificate_password}.

---

##### `ExternalAccessEnabled`<sup>Optional</sup> <a name="ExternalAccessEnabled" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap.property.externalAccessEnabled"></a>

```csharp
public bool|IResolvable ExternalAccessEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#external_access_enabled ActiveDirectoryDomainService#external_access_enabled}.

---

### ActiveDirectoryDomainServiceSecurity <a name="ActiveDirectoryDomainServiceSecurity" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ActiveDirectoryDomainServiceSecurity {
    bool|IResolvable KerberosArmoringEnabled = null,
    bool|IResolvable KerberosRc4EncryptionEnabled = null,
    bool|IResolvable NtlmV1Enabled = null,
    bool|IResolvable SyncKerberosPasswords = null,
    bool|IResolvable SyncNtlmPasswords = null,
    bool|IResolvable SyncOnPremPasswords = null,
    bool|IResolvable TlsV1Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.kerberosArmoringEnabled">KerberosArmoringEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#kerberos_armoring_enabled ActiveDirectoryDomainService#kerberos_armoring_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.kerberosRc4EncryptionEnabled">KerberosRc4EncryptionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#kerberos_rc4_encryption_enabled ActiveDirectoryDomainService#kerberos_rc4_encryption_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.ntlmV1Enabled">NtlmV1Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#ntlm_v1_enabled ActiveDirectoryDomainService#ntlm_v1_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.syncKerberosPasswords">SyncKerberosPasswords</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#sync_kerberos_passwords ActiveDirectoryDomainService#sync_kerberos_passwords}. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.syncNtlmPasswords">SyncNtlmPasswords</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#sync_ntlm_passwords ActiveDirectoryDomainService#sync_ntlm_passwords}. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.syncOnPremPasswords">SyncOnPremPasswords</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#sync_on_prem_passwords ActiveDirectoryDomainService#sync_on_prem_passwords}. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.tlsV1Enabled">TlsV1Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#tls_v1_enabled ActiveDirectoryDomainService#tls_v1_enabled}. |

---

##### `KerberosArmoringEnabled`<sup>Optional</sup> <a name="KerberosArmoringEnabled" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.kerberosArmoringEnabled"></a>

```csharp
public bool|IResolvable KerberosArmoringEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#kerberos_armoring_enabled ActiveDirectoryDomainService#kerberos_armoring_enabled}.

---

##### `KerberosRc4EncryptionEnabled`<sup>Optional</sup> <a name="KerberosRc4EncryptionEnabled" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.kerberosRc4EncryptionEnabled"></a>

```csharp
public bool|IResolvable KerberosRc4EncryptionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#kerberos_rc4_encryption_enabled ActiveDirectoryDomainService#kerberos_rc4_encryption_enabled}.

---

##### `NtlmV1Enabled`<sup>Optional</sup> <a name="NtlmV1Enabled" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.ntlmV1Enabled"></a>

```csharp
public bool|IResolvable NtlmV1Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#ntlm_v1_enabled ActiveDirectoryDomainService#ntlm_v1_enabled}.

---

##### `SyncKerberosPasswords`<sup>Optional</sup> <a name="SyncKerberosPasswords" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.syncKerberosPasswords"></a>

```csharp
public bool|IResolvable SyncKerberosPasswords { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#sync_kerberos_passwords ActiveDirectoryDomainService#sync_kerberos_passwords}.

---

##### `SyncNtlmPasswords`<sup>Optional</sup> <a name="SyncNtlmPasswords" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.syncNtlmPasswords"></a>

```csharp
public bool|IResolvable SyncNtlmPasswords { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#sync_ntlm_passwords ActiveDirectoryDomainService#sync_ntlm_passwords}.

---

##### `SyncOnPremPasswords`<sup>Optional</sup> <a name="SyncOnPremPasswords" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.syncOnPremPasswords"></a>

```csharp
public bool|IResolvable SyncOnPremPasswords { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#sync_on_prem_passwords ActiveDirectoryDomainService#sync_on_prem_passwords}.

---

##### `TlsV1Enabled`<sup>Optional</sup> <a name="TlsV1Enabled" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity.property.tlsV1Enabled"></a>

```csharp
public bool|IResolvable TlsV1Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#tls_v1_enabled ActiveDirectoryDomainService#tls_v1_enabled}.

---

### ActiveDirectoryDomainServiceTimeouts <a name="ActiveDirectoryDomainServiceTimeouts" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ActiveDirectoryDomainServiceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#create ActiveDirectoryDomainService#create}. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#delete ActiveDirectoryDomainService#delete}. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#read ActiveDirectoryDomainService#read}. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#update ActiveDirectoryDomainService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#create ActiveDirectoryDomainService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#delete ActiveDirectoryDomainService#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#read ActiveDirectoryDomainService#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/active_directory_domain_service#update ActiveDirectoryDomainService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ActiveDirectoryDomainServiceInitialReplicaSetOutputReference <a name="ActiveDirectoryDomainServiceInitialReplicaSetOutputReference" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ActiveDirectoryDomainServiceInitialReplicaSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.domainControllerIpAddresses">DomainControllerIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.externalAccessIpAddress">ExternalAccessIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.serviceStatus">ServiceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet">ActiveDirectoryDomainServiceInitialReplicaSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainControllerIpAddresses`<sup>Required</sup> <a name="DomainControllerIpAddresses" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.domainControllerIpAddresses"></a>

```csharp
public string[] DomainControllerIpAddresses { get; }
```

- *Type:* string[]

---

##### `ExternalAccessIpAddress`<sup>Required</sup> <a name="ExternalAccessIpAddress" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.externalAccessIpAddress"></a>

```csharp
public string ExternalAccessIpAddress { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ServiceStatus`<sup>Required</sup> <a name="ServiceStatus" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.serviceStatus"></a>

```csharp
public string ServiceStatus { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSetOutputReference.property.internalValue"></a>

```csharp
public ActiveDirectoryDomainServiceInitialReplicaSet InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceInitialReplicaSet">ActiveDirectoryDomainServiceInitialReplicaSet</a>

---


### ActiveDirectoryDomainServiceNotificationsOutputReference <a name="ActiveDirectoryDomainServiceNotificationsOutputReference" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ActiveDirectoryDomainServiceNotificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resetAdditionalRecipients">ResetAdditionalRecipients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resetNotifyDcAdmins">ResetNotifyDcAdmins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resetNotifyGlobalAdmins">ResetNotifyGlobalAdmins</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalRecipients` <a name="ResetAdditionalRecipients" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resetAdditionalRecipients"></a>

```csharp
private void ResetAdditionalRecipients()
```

##### `ResetNotifyDcAdmins` <a name="ResetNotifyDcAdmins" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resetNotifyDcAdmins"></a>

```csharp
private void ResetNotifyDcAdmins()
```

##### `ResetNotifyGlobalAdmins` <a name="ResetNotifyGlobalAdmins" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.resetNotifyGlobalAdmins"></a>

```csharp
private void ResetNotifyGlobalAdmins()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.additionalRecipientsInput">AdditionalRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyDcAdminsInput">NotifyDcAdminsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyGlobalAdminsInput">NotifyGlobalAdminsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.additionalRecipients">AdditionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyDcAdmins">NotifyDcAdmins</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyGlobalAdmins">NotifyGlobalAdmins</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications">ActiveDirectoryDomainServiceNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalRecipientsInput`<sup>Optional</sup> <a name="AdditionalRecipientsInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.additionalRecipientsInput"></a>

```csharp
public string[] AdditionalRecipientsInput { get; }
```

- *Type:* string[]

---

##### `NotifyDcAdminsInput`<sup>Optional</sup> <a name="NotifyDcAdminsInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyDcAdminsInput"></a>

```csharp
public bool|IResolvable NotifyDcAdminsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NotifyGlobalAdminsInput`<sup>Optional</sup> <a name="NotifyGlobalAdminsInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyGlobalAdminsInput"></a>

```csharp
public bool|IResolvable NotifyGlobalAdminsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AdditionalRecipients`<sup>Required</sup> <a name="AdditionalRecipients" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.additionalRecipients"></a>

```csharp
public string[] AdditionalRecipients { get; }
```

- *Type:* string[]

---

##### `NotifyDcAdmins`<sup>Required</sup> <a name="NotifyDcAdmins" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyDcAdmins"></a>

```csharp
public bool|IResolvable NotifyDcAdmins { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NotifyGlobalAdmins`<sup>Required</sup> <a name="NotifyGlobalAdmins" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyGlobalAdmins"></a>

```csharp
public bool|IResolvable NotifyGlobalAdmins { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotificationsOutputReference.property.internalValue"></a>

```csharp
public ActiveDirectoryDomainServiceNotifications InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceNotifications">ActiveDirectoryDomainServiceNotifications</a>

---


### ActiveDirectoryDomainServiceSecureLdapOutputReference <a name="ActiveDirectoryDomainServiceSecureLdapOutputReference" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ActiveDirectoryDomainServiceSecureLdapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.resetExternalAccessEnabled">ResetExternalAccessEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExternalAccessEnabled` <a name="ResetExternalAccessEnabled" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.resetExternalAccessEnabled"></a>

```csharp
private void ResetExternalAccessEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.certificateExpiry">CertificateExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.certificateThumbprint">CertificateThumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.publicCertificate">PublicCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.externalAccessEnabledInput">ExternalAccessEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.pfxCertificateInput">PfxCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.pfxCertificatePasswordInput">PfxCertificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.externalAccessEnabled">ExternalAccessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.pfxCertificate">PfxCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.pfxCertificatePassword">PfxCertificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap">ActiveDirectoryDomainServiceSecureLdap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateExpiry`<sup>Required</sup> <a name="CertificateExpiry" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.certificateExpiry"></a>

```csharp
public string CertificateExpiry { get; }
```

- *Type:* string

---

##### `CertificateThumbprint`<sup>Required</sup> <a name="CertificateThumbprint" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.certificateThumbprint"></a>

```csharp
public string CertificateThumbprint { get; }
```

- *Type:* string

---

##### `PublicCertificate`<sup>Required</sup> <a name="PublicCertificate" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.publicCertificate"></a>

```csharp
public string PublicCertificate { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExternalAccessEnabledInput`<sup>Optional</sup> <a name="ExternalAccessEnabledInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.externalAccessEnabledInput"></a>

```csharp
public bool|IResolvable ExternalAccessEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PfxCertificateInput`<sup>Optional</sup> <a name="PfxCertificateInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.pfxCertificateInput"></a>

```csharp
public string PfxCertificateInput { get; }
```

- *Type:* string

---

##### `PfxCertificatePasswordInput`<sup>Optional</sup> <a name="PfxCertificatePasswordInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.pfxCertificatePasswordInput"></a>

```csharp
public string PfxCertificatePasswordInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExternalAccessEnabled`<sup>Required</sup> <a name="ExternalAccessEnabled" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.externalAccessEnabled"></a>

```csharp
public bool|IResolvable ExternalAccessEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PfxCertificate`<sup>Required</sup> <a name="PfxCertificate" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.pfxCertificate"></a>

```csharp
public string PfxCertificate { get; }
```

- *Type:* string

---

##### `PfxCertificatePassword`<sup>Required</sup> <a name="PfxCertificatePassword" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.pfxCertificatePassword"></a>

```csharp
public string PfxCertificatePassword { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdapOutputReference.property.internalValue"></a>

```csharp
public ActiveDirectoryDomainServiceSecureLdap InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecureLdap">ActiveDirectoryDomainServiceSecureLdap</a>

---


### ActiveDirectoryDomainServiceSecurityOutputReference <a name="ActiveDirectoryDomainServiceSecurityOutputReference" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ActiveDirectoryDomainServiceSecurityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetKerberosArmoringEnabled">ResetKerberosArmoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetKerberosRc4EncryptionEnabled">ResetKerberosRc4EncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetNtlmV1Enabled">ResetNtlmV1Enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetSyncKerberosPasswords">ResetSyncKerberosPasswords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetSyncNtlmPasswords">ResetSyncNtlmPasswords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetSyncOnPremPasswords">ResetSyncOnPremPasswords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetTlsV1Enabled">ResetTlsV1Enabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKerberosArmoringEnabled` <a name="ResetKerberosArmoringEnabled" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetKerberosArmoringEnabled"></a>

```csharp
private void ResetKerberosArmoringEnabled()
```

##### `ResetKerberosRc4EncryptionEnabled` <a name="ResetKerberosRc4EncryptionEnabled" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetKerberosRc4EncryptionEnabled"></a>

```csharp
private void ResetKerberosRc4EncryptionEnabled()
```

##### `ResetNtlmV1Enabled` <a name="ResetNtlmV1Enabled" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetNtlmV1Enabled"></a>

```csharp
private void ResetNtlmV1Enabled()
```

##### `ResetSyncKerberosPasswords` <a name="ResetSyncKerberosPasswords" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetSyncKerberosPasswords"></a>

```csharp
private void ResetSyncKerberosPasswords()
```

##### `ResetSyncNtlmPasswords` <a name="ResetSyncNtlmPasswords" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetSyncNtlmPasswords"></a>

```csharp
private void ResetSyncNtlmPasswords()
```

##### `ResetSyncOnPremPasswords` <a name="ResetSyncOnPremPasswords" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetSyncOnPremPasswords"></a>

```csharp
private void ResetSyncOnPremPasswords()
```

##### `ResetTlsV1Enabled` <a name="ResetTlsV1Enabled" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.resetTlsV1Enabled"></a>

```csharp
private void ResetTlsV1Enabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosArmoringEnabledInput">KerberosArmoringEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosRc4EncryptionEnabledInput">KerberosRc4EncryptionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.ntlmV1EnabledInput">NtlmV1EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncKerberosPasswordsInput">SyncKerberosPasswordsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncNtlmPasswordsInput">SyncNtlmPasswordsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncOnPremPasswordsInput">SyncOnPremPasswordsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.tlsV1EnabledInput">TlsV1EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosArmoringEnabled">KerberosArmoringEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosRc4EncryptionEnabled">KerberosRc4EncryptionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.ntlmV1Enabled">NtlmV1Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncKerberosPasswords">SyncKerberosPasswords</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncNtlmPasswords">SyncNtlmPasswords</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncOnPremPasswords">SyncOnPremPasswords</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.tlsV1Enabled">TlsV1Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity">ActiveDirectoryDomainServiceSecurity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KerberosArmoringEnabledInput`<sup>Optional</sup> <a name="KerberosArmoringEnabledInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosArmoringEnabledInput"></a>

```csharp
public bool|IResolvable KerberosArmoringEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KerberosRc4EncryptionEnabledInput`<sup>Optional</sup> <a name="KerberosRc4EncryptionEnabledInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosRc4EncryptionEnabledInput"></a>

```csharp
public bool|IResolvable KerberosRc4EncryptionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NtlmV1EnabledInput`<sup>Optional</sup> <a name="NtlmV1EnabledInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.ntlmV1EnabledInput"></a>

```csharp
public bool|IResolvable NtlmV1EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SyncKerberosPasswordsInput`<sup>Optional</sup> <a name="SyncKerberosPasswordsInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncKerberosPasswordsInput"></a>

```csharp
public bool|IResolvable SyncKerberosPasswordsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SyncNtlmPasswordsInput`<sup>Optional</sup> <a name="SyncNtlmPasswordsInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncNtlmPasswordsInput"></a>

```csharp
public bool|IResolvable SyncNtlmPasswordsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SyncOnPremPasswordsInput`<sup>Optional</sup> <a name="SyncOnPremPasswordsInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncOnPremPasswordsInput"></a>

```csharp
public bool|IResolvable SyncOnPremPasswordsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TlsV1EnabledInput`<sup>Optional</sup> <a name="TlsV1EnabledInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.tlsV1EnabledInput"></a>

```csharp
public bool|IResolvable TlsV1EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KerberosArmoringEnabled`<sup>Required</sup> <a name="KerberosArmoringEnabled" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosArmoringEnabled"></a>

```csharp
public bool|IResolvable KerberosArmoringEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KerberosRc4EncryptionEnabled`<sup>Required</sup> <a name="KerberosRc4EncryptionEnabled" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosRc4EncryptionEnabled"></a>

```csharp
public bool|IResolvable KerberosRc4EncryptionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NtlmV1Enabled`<sup>Required</sup> <a name="NtlmV1Enabled" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.ntlmV1Enabled"></a>

```csharp
public bool|IResolvable NtlmV1Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SyncKerberosPasswords`<sup>Required</sup> <a name="SyncKerberosPasswords" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncKerberosPasswords"></a>

```csharp
public bool|IResolvable SyncKerberosPasswords { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SyncNtlmPasswords`<sup>Required</sup> <a name="SyncNtlmPasswords" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncNtlmPasswords"></a>

```csharp
public bool|IResolvable SyncNtlmPasswords { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SyncOnPremPasswords`<sup>Required</sup> <a name="SyncOnPremPasswords" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.syncOnPremPasswords"></a>

```csharp
public bool|IResolvable SyncOnPremPasswords { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TlsV1Enabled`<sup>Required</sup> <a name="TlsV1Enabled" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.tlsV1Enabled"></a>

```csharp
public bool|IResolvable TlsV1Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurityOutputReference.property.internalValue"></a>

```csharp
public ActiveDirectoryDomainServiceSecurity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceSecurity">ActiveDirectoryDomainServiceSecurity</a>

---


### ActiveDirectoryDomainServiceTimeoutsOutputReference <a name="ActiveDirectoryDomainServiceTimeoutsOutputReference" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new ActiveDirectoryDomainServiceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts">ActiveDirectoryDomainServiceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ActiveDirectoryDomainServiceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.activeDirectoryDomainService.ActiveDirectoryDomainServiceTimeouts">ActiveDirectoryDomainServiceTimeouts</a>

---



