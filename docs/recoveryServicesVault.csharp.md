# `recoveryServicesVault` Submodule <a name="`recoveryServicesVault` Submodule" id="@cdktn/provider-azurerm.recoveryServicesVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RecoveryServicesVault <a name="RecoveryServicesVault" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault azurerm_recovery_services_vault}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new RecoveryServicesVault(Construct Scope, string Id, RecoveryServicesVaultConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig">RecoveryServicesVaultConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig">RecoveryServicesVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putMonitoring">PutMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetClassicVmwareReplicationEnabled">ResetClassicVmwareReplicationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetCrossRegionRestoreEnabled">ResetCrossRegionRestoreEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetImmutability">ResetImmutability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetMonitoring">ResetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetStorageModeType">ResetStorageModeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryption` <a name="PutEncryption" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putEncryption"></a>

```csharp
private void PutEncryption(RecoveryServicesVaultEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption">RecoveryServicesVaultEncryption</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putIdentity"></a>

```csharp
private void PutIdentity(RecoveryServicesVaultIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity">RecoveryServicesVaultIdentity</a>

---

##### `PutMonitoring` <a name="PutMonitoring" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putMonitoring"></a>

```csharp
private void PutMonitoring(RecoveryServicesVaultMonitoring Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring">RecoveryServicesVaultMonitoring</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putTimeouts"></a>

```csharp
private void PutTimeouts(RecoveryServicesVaultTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts">RecoveryServicesVaultTimeouts</a>

---

##### `ResetClassicVmwareReplicationEnabled` <a name="ResetClassicVmwareReplicationEnabled" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetClassicVmwareReplicationEnabled"></a>

```csharp
private void ResetClassicVmwareReplicationEnabled()
```

##### `ResetCrossRegionRestoreEnabled` <a name="ResetCrossRegionRestoreEnabled" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetCrossRegionRestoreEnabled"></a>

```csharp
private void ResetCrossRegionRestoreEnabled()
```

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetEncryption"></a>

```csharp
private void ResetEncryption()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetImmutability` <a name="ResetImmutability" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetImmutability"></a>

```csharp
private void ResetImmutability()
```

##### `ResetMonitoring` <a name="ResetMonitoring" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetMonitoring"></a>

```csharp
private void ResetMonitoring()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetPublicNetworkAccessEnabled"></a>

```csharp
private void ResetPublicNetworkAccessEnabled()
```

##### `ResetStorageModeType` <a name="ResetStorageModeType" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetStorageModeType"></a>

```csharp
private void ResetStorageModeType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RecoveryServicesVault resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

RecoveryServicesVault.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

RecoveryServicesVault.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

RecoveryServicesVault.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

RecoveryServicesVault.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RecoveryServicesVault resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RecoveryServicesVault to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RecoveryServicesVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RecoveryServicesVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference">RecoveryServicesVaultEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference">RecoveryServicesVaultIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.monitoring">Monitoring</a></code> | <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference">RecoveryServicesVaultMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference">RecoveryServicesVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.classicVmwareReplicationEnabledInput">ClassicVmwareReplicationEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.crossRegionRestoreEnabledInput">CrossRegionRestoreEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.encryptionInput">EncryptionInput</a></code> | <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption">RecoveryServicesVaultEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity">RecoveryServicesVaultIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.immutabilityInput">ImmutabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.monitoringInput">MonitoringInput</a></code> | <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring">RecoveryServicesVaultMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.storageModeTypeInput">StorageModeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts">RecoveryServicesVaultTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.classicVmwareReplicationEnabled">ClassicVmwareReplicationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.crossRegionRestoreEnabled">CrossRegionRestoreEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.immutability">Immutability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.storageModeType">StorageModeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.encryption"></a>

```csharp
public RecoveryServicesVaultEncryptionOutputReference Encryption { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference">RecoveryServicesVaultEncryptionOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.identity"></a>

```csharp
public RecoveryServicesVaultIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference">RecoveryServicesVaultIdentityOutputReference</a>

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.monitoring"></a>

```csharp
public RecoveryServicesVaultMonitoringOutputReference Monitoring { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference">RecoveryServicesVaultMonitoringOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.timeouts"></a>

```csharp
public RecoveryServicesVaultTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference">RecoveryServicesVaultTimeoutsOutputReference</a>

---

##### `ClassicVmwareReplicationEnabledInput`<sup>Optional</sup> <a name="ClassicVmwareReplicationEnabledInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.classicVmwareReplicationEnabledInput"></a>

```csharp
public bool|IResolvable ClassicVmwareReplicationEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CrossRegionRestoreEnabledInput`<sup>Optional</sup> <a name="CrossRegionRestoreEnabledInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.crossRegionRestoreEnabledInput"></a>

```csharp
public bool|IResolvable CrossRegionRestoreEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.encryptionInput"></a>

```csharp
public RecoveryServicesVaultEncryption EncryptionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption">RecoveryServicesVaultEncryption</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.identityInput"></a>

```csharp
public RecoveryServicesVaultIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity">RecoveryServicesVaultIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImmutabilityInput`<sup>Optional</sup> <a name="ImmutabilityInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.immutabilityInput"></a>

```csharp
public string ImmutabilityInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MonitoringInput`<sup>Optional</sup> <a name="MonitoringInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.monitoringInput"></a>

```csharp
public RecoveryServicesVaultMonitoring MonitoringInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring">RecoveryServicesVaultMonitoring</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.publicNetworkAccessEnabledInput"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `StorageModeTypeInput`<sup>Optional</sup> <a name="StorageModeTypeInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.storageModeTypeInput"></a>

```csharp
public string StorageModeTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.timeoutsInput"></a>

```csharp
public IResolvable|RecoveryServicesVaultTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts">RecoveryServicesVaultTimeouts</a>

---

##### `ClassicVmwareReplicationEnabled`<sup>Required</sup> <a name="ClassicVmwareReplicationEnabled" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.classicVmwareReplicationEnabled"></a>

```csharp
public bool|IResolvable ClassicVmwareReplicationEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CrossRegionRestoreEnabled`<sup>Required</sup> <a name="CrossRegionRestoreEnabled" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.crossRegionRestoreEnabled"></a>

```csharp
public bool|IResolvable CrossRegionRestoreEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Immutability`<sup>Required</sup> <a name="Immutability" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.immutability"></a>

```csharp
public string Immutability { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.publicNetworkAccessEnabled"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `StorageModeType`<sup>Required</sup> <a name="StorageModeType" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.storageModeType"></a>

```csharp
public string StorageModeType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVault.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RecoveryServicesVaultConfig <a name="RecoveryServicesVaultConfig" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new RecoveryServicesVaultConfig {
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
    bool|IResolvable ClassicVmwareReplicationEnabled = null,
    bool|IResolvable CrossRegionRestoreEnabled = null,
    RecoveryServicesVaultEncryption Encryption = null,
    string Id = null,
    RecoveryServicesVaultIdentity Identity = null,
    string Immutability = null,
    RecoveryServicesVaultMonitoring Monitoring = null,
    bool|IResolvable PublicNetworkAccessEnabled = null,
    string StorageModeType = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    RecoveryServicesVaultTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#location RecoveryServicesVault#location}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#name RecoveryServicesVault#name}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#resource_group_name RecoveryServicesVault#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#sku RecoveryServicesVault#sku}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.classicVmwareReplicationEnabled">ClassicVmwareReplicationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#classic_vmware_replication_enabled RecoveryServicesVault#classic_vmware_replication_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.crossRegionRestoreEnabled">CrossRegionRestoreEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#cross_region_restore_enabled RecoveryServicesVault#cross_region_restore_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption">RecoveryServicesVaultEncryption</a></code> | encryption block. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#id RecoveryServicesVault#id}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity">RecoveryServicesVaultIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.immutability">Immutability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#immutability RecoveryServicesVault#immutability}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.monitoring">Monitoring</a></code> | <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring">RecoveryServicesVaultMonitoring</a></code> | monitoring block. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#public_network_access_enabled RecoveryServicesVault#public_network_access_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.storageModeType">StorageModeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#storage_mode_type RecoveryServicesVault#storage_mode_type}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#tags RecoveryServicesVault#tags}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts">RecoveryServicesVaultTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#location RecoveryServicesVault#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#name RecoveryServicesVault#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#resource_group_name RecoveryServicesVault#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#sku RecoveryServicesVault#sku}.

---

##### `ClassicVmwareReplicationEnabled`<sup>Optional</sup> <a name="ClassicVmwareReplicationEnabled" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.classicVmwareReplicationEnabled"></a>

```csharp
public bool|IResolvable ClassicVmwareReplicationEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#classic_vmware_replication_enabled RecoveryServicesVault#classic_vmware_replication_enabled}.

---

##### `CrossRegionRestoreEnabled`<sup>Optional</sup> <a name="CrossRegionRestoreEnabled" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.crossRegionRestoreEnabled"></a>

```csharp
public bool|IResolvable CrossRegionRestoreEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#cross_region_restore_enabled RecoveryServicesVault#cross_region_restore_enabled}.

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.encryption"></a>

```csharp
public RecoveryServicesVaultEncryption Encryption { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption">RecoveryServicesVaultEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#encryption RecoveryServicesVault#encryption}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#id RecoveryServicesVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.identity"></a>

```csharp
public RecoveryServicesVaultIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity">RecoveryServicesVaultIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#identity RecoveryServicesVault#identity}

---

##### `Immutability`<sup>Optional</sup> <a name="Immutability" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.immutability"></a>

```csharp
public string Immutability { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#immutability RecoveryServicesVault#immutability}.

---

##### `Monitoring`<sup>Optional</sup> <a name="Monitoring" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.monitoring"></a>

```csharp
public RecoveryServicesVaultMonitoring Monitoring { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring">RecoveryServicesVaultMonitoring</a>

monitoring block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#monitoring RecoveryServicesVault#monitoring}

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.publicNetworkAccessEnabled"></a>

```csharp
public bool|IResolvable PublicNetworkAccessEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#public_network_access_enabled RecoveryServicesVault#public_network_access_enabled}.

---

##### `StorageModeType`<sup>Optional</sup> <a name="StorageModeType" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.storageModeType"></a>

```csharp
public string StorageModeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#storage_mode_type RecoveryServicesVault#storage_mode_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#tags RecoveryServicesVault#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultConfig.property.timeouts"></a>

```csharp
public RecoveryServicesVaultTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts">RecoveryServicesVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#timeouts RecoveryServicesVault#timeouts}

---

### RecoveryServicesVaultEncryption <a name="RecoveryServicesVaultEncryption" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new RecoveryServicesVaultEncryption {
    bool|IResolvable InfrastructureEncryptionEnabled,
    string KeyId,
    string UserAssignedIdentityId = null,
    bool|IResolvable UseSystemAssignedIdentity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.property.infrastructureEncryptionEnabled">InfrastructureEncryptionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#infrastructure_encryption_enabled RecoveryServicesVault#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.property.keyId">KeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#key_id RecoveryServicesVault#key_id}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#user_assigned_identity_id RecoveryServicesVault#user_assigned_identity_id}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.property.useSystemAssignedIdentity">UseSystemAssignedIdentity</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#use_system_assigned_identity RecoveryServicesVault#use_system_assigned_identity}. |

---

##### `InfrastructureEncryptionEnabled`<sup>Required</sup> <a name="InfrastructureEncryptionEnabled" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.property.infrastructureEncryptionEnabled"></a>

```csharp
public bool|IResolvable InfrastructureEncryptionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#infrastructure_encryption_enabled RecoveryServicesVault#infrastructure_encryption_enabled}.

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#key_id RecoveryServicesVault#key_id}.

---

##### `UserAssignedIdentityId`<sup>Optional</sup> <a name="UserAssignedIdentityId" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#user_assigned_identity_id RecoveryServicesVault#user_assigned_identity_id}.

---

##### `UseSystemAssignedIdentity`<sup>Optional</sup> <a name="UseSystemAssignedIdentity" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption.property.useSystemAssignedIdentity"></a>

```csharp
public bool|IResolvable UseSystemAssignedIdentity { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#use_system_assigned_identity RecoveryServicesVault#use_system_assigned_identity}.

---

### RecoveryServicesVaultIdentity <a name="RecoveryServicesVaultIdentity" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new RecoveryServicesVaultIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#type RecoveryServicesVault#type}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#identity_ids RecoveryServicesVault#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#type RecoveryServicesVault#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#identity_ids RecoveryServicesVault#identity_ids}.

---

### RecoveryServicesVaultMonitoring <a name="RecoveryServicesVaultMonitoring" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new RecoveryServicesVaultMonitoring {
    bool|IResolvable AlertsForAllFailoverIssuesEnabled = null,
    bool|IResolvable AlertsForAllJobFailuresEnabled = null,
    bool|IResolvable AlertsForAllReplicationIssuesEnabled = null,
    bool|IResolvable AlertsForCriticalOperationFailuresEnabled = null,
    bool|IResolvable EmailNotificationsForSiteRecoveryEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring.property.alertsForAllFailoverIssuesEnabled">AlertsForAllFailoverIssuesEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#alerts_for_all_failover_issues_enabled RecoveryServicesVault#alerts_for_all_failover_issues_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring.property.alertsForAllJobFailuresEnabled">AlertsForAllJobFailuresEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#alerts_for_all_job_failures_enabled RecoveryServicesVault#alerts_for_all_job_failures_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring.property.alertsForAllReplicationIssuesEnabled">AlertsForAllReplicationIssuesEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#alerts_for_all_replication_issues_enabled RecoveryServicesVault#alerts_for_all_replication_issues_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring.property.alertsForCriticalOperationFailuresEnabled">AlertsForCriticalOperationFailuresEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#alerts_for_critical_operation_failures_enabled RecoveryServicesVault#alerts_for_critical_operation_failures_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring.property.emailNotificationsForSiteRecoveryEnabled">EmailNotificationsForSiteRecoveryEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#email_notifications_for_site_recovery_enabled RecoveryServicesVault#email_notifications_for_site_recovery_enabled}. |

---

##### `AlertsForAllFailoverIssuesEnabled`<sup>Optional</sup> <a name="AlertsForAllFailoverIssuesEnabled" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring.property.alertsForAllFailoverIssuesEnabled"></a>

```csharp
public bool|IResolvable AlertsForAllFailoverIssuesEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#alerts_for_all_failover_issues_enabled RecoveryServicesVault#alerts_for_all_failover_issues_enabled}.

---

##### `AlertsForAllJobFailuresEnabled`<sup>Optional</sup> <a name="AlertsForAllJobFailuresEnabled" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring.property.alertsForAllJobFailuresEnabled"></a>

```csharp
public bool|IResolvable AlertsForAllJobFailuresEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#alerts_for_all_job_failures_enabled RecoveryServicesVault#alerts_for_all_job_failures_enabled}.

---

##### `AlertsForAllReplicationIssuesEnabled`<sup>Optional</sup> <a name="AlertsForAllReplicationIssuesEnabled" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring.property.alertsForAllReplicationIssuesEnabled"></a>

```csharp
public bool|IResolvable AlertsForAllReplicationIssuesEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#alerts_for_all_replication_issues_enabled RecoveryServicesVault#alerts_for_all_replication_issues_enabled}.

---

##### `AlertsForCriticalOperationFailuresEnabled`<sup>Optional</sup> <a name="AlertsForCriticalOperationFailuresEnabled" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring.property.alertsForCriticalOperationFailuresEnabled"></a>

```csharp
public bool|IResolvable AlertsForCriticalOperationFailuresEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#alerts_for_critical_operation_failures_enabled RecoveryServicesVault#alerts_for_critical_operation_failures_enabled}.

---

##### `EmailNotificationsForSiteRecoveryEnabled`<sup>Optional</sup> <a name="EmailNotificationsForSiteRecoveryEnabled" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring.property.emailNotificationsForSiteRecoveryEnabled"></a>

```csharp
public bool|IResolvable EmailNotificationsForSiteRecoveryEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#email_notifications_for_site_recovery_enabled RecoveryServicesVault#email_notifications_for_site_recovery_enabled}.

---

### RecoveryServicesVaultTimeouts <a name="RecoveryServicesVaultTimeouts" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new RecoveryServicesVaultTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#create RecoveryServicesVault#create}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#delete RecoveryServicesVault#delete}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#read RecoveryServicesVault#read}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#update RecoveryServicesVault#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#create RecoveryServicesVault#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#delete RecoveryServicesVault#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#read RecoveryServicesVault#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/recovery_services_vault#update RecoveryServicesVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RecoveryServicesVaultEncryptionOutputReference <a name="RecoveryServicesVaultEncryptionOutputReference" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new RecoveryServicesVaultEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.resetUserAssignedIdentityId">ResetUserAssignedIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.resetUseSystemAssignedIdentity">ResetUseSystemAssignedIdentity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUserAssignedIdentityId` <a name="ResetUserAssignedIdentityId" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.resetUserAssignedIdentityId"></a>

```csharp
private void ResetUserAssignedIdentityId()
```

##### `ResetUseSystemAssignedIdentity` <a name="ResetUseSystemAssignedIdentity" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.resetUseSystemAssignedIdentity"></a>

```csharp
private void ResetUseSystemAssignedIdentity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.infrastructureEncryptionEnabledInput">InfrastructureEncryptionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.userAssignedIdentityIdInput">UserAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.useSystemAssignedIdentityInput">UseSystemAssignedIdentityInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.infrastructureEncryptionEnabled">InfrastructureEncryptionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.userAssignedIdentityId">UserAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.useSystemAssignedIdentity">UseSystemAssignedIdentity</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption">RecoveryServicesVaultEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InfrastructureEncryptionEnabledInput`<sup>Optional</sup> <a name="InfrastructureEncryptionEnabledInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.infrastructureEncryptionEnabledInput"></a>

```csharp
public bool|IResolvable InfrastructureEncryptionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityIdInput`<sup>Optional</sup> <a name="UserAssignedIdentityIdInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.userAssignedIdentityIdInput"></a>

```csharp
public string UserAssignedIdentityIdInput { get; }
```

- *Type:* string

---

##### `UseSystemAssignedIdentityInput`<sup>Optional</sup> <a name="UseSystemAssignedIdentityInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.useSystemAssignedIdentityInput"></a>

```csharp
public bool|IResolvable UseSystemAssignedIdentityInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InfrastructureEncryptionEnabled`<sup>Required</sup> <a name="InfrastructureEncryptionEnabled" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.infrastructureEncryptionEnabled"></a>

```csharp
public bool|IResolvable InfrastructureEncryptionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `UserAssignedIdentityId`<sup>Required</sup> <a name="UserAssignedIdentityId" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.userAssignedIdentityId"></a>

```csharp
public string UserAssignedIdentityId { get; }
```

- *Type:* string

---

##### `UseSystemAssignedIdentity`<sup>Required</sup> <a name="UseSystemAssignedIdentity" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.useSystemAssignedIdentity"></a>

```csharp
public bool|IResolvable UseSystemAssignedIdentity { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryptionOutputReference.property.internalValue"></a>

```csharp
public RecoveryServicesVaultEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultEncryption">RecoveryServicesVaultEncryption</a>

---


### RecoveryServicesVaultIdentityOutputReference <a name="RecoveryServicesVaultIdentityOutputReference" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new RecoveryServicesVaultIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity">RecoveryServicesVaultIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentityOutputReference.property.internalValue"></a>

```csharp
public RecoveryServicesVaultIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultIdentity">RecoveryServicesVaultIdentity</a>

---


### RecoveryServicesVaultMonitoringOutputReference <a name="RecoveryServicesVaultMonitoringOutputReference" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new RecoveryServicesVaultMonitoringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resetAlertsForAllFailoverIssuesEnabled">ResetAlertsForAllFailoverIssuesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resetAlertsForAllJobFailuresEnabled">ResetAlertsForAllJobFailuresEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resetAlertsForAllReplicationIssuesEnabled">ResetAlertsForAllReplicationIssuesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resetAlertsForCriticalOperationFailuresEnabled">ResetAlertsForCriticalOperationFailuresEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resetEmailNotificationsForSiteRecoveryEnabled">ResetEmailNotificationsForSiteRecoveryEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlertsForAllFailoverIssuesEnabled` <a name="ResetAlertsForAllFailoverIssuesEnabled" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resetAlertsForAllFailoverIssuesEnabled"></a>

```csharp
private void ResetAlertsForAllFailoverIssuesEnabled()
```

##### `ResetAlertsForAllJobFailuresEnabled` <a name="ResetAlertsForAllJobFailuresEnabled" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resetAlertsForAllJobFailuresEnabled"></a>

```csharp
private void ResetAlertsForAllJobFailuresEnabled()
```

##### `ResetAlertsForAllReplicationIssuesEnabled` <a name="ResetAlertsForAllReplicationIssuesEnabled" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resetAlertsForAllReplicationIssuesEnabled"></a>

```csharp
private void ResetAlertsForAllReplicationIssuesEnabled()
```

##### `ResetAlertsForCriticalOperationFailuresEnabled` <a name="ResetAlertsForCriticalOperationFailuresEnabled" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resetAlertsForCriticalOperationFailuresEnabled"></a>

```csharp
private void ResetAlertsForCriticalOperationFailuresEnabled()
```

##### `ResetEmailNotificationsForSiteRecoveryEnabled` <a name="ResetEmailNotificationsForSiteRecoveryEnabled" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.resetEmailNotificationsForSiteRecoveryEnabled"></a>

```csharp
private void ResetEmailNotificationsForSiteRecoveryEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForAllFailoverIssuesEnabledInput">AlertsForAllFailoverIssuesEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForAllJobFailuresEnabledInput">AlertsForAllJobFailuresEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForAllReplicationIssuesEnabledInput">AlertsForAllReplicationIssuesEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForCriticalOperationFailuresEnabledInput">AlertsForCriticalOperationFailuresEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.emailNotificationsForSiteRecoveryEnabledInput">EmailNotificationsForSiteRecoveryEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForAllFailoverIssuesEnabled">AlertsForAllFailoverIssuesEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForAllJobFailuresEnabled">AlertsForAllJobFailuresEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForAllReplicationIssuesEnabled">AlertsForAllReplicationIssuesEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForCriticalOperationFailuresEnabled">AlertsForCriticalOperationFailuresEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.emailNotificationsForSiteRecoveryEnabled">EmailNotificationsForSiteRecoveryEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring">RecoveryServicesVaultMonitoring</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlertsForAllFailoverIssuesEnabledInput`<sup>Optional</sup> <a name="AlertsForAllFailoverIssuesEnabledInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForAllFailoverIssuesEnabledInput"></a>

```csharp
public bool|IResolvable AlertsForAllFailoverIssuesEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AlertsForAllJobFailuresEnabledInput`<sup>Optional</sup> <a name="AlertsForAllJobFailuresEnabledInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForAllJobFailuresEnabledInput"></a>

```csharp
public bool|IResolvable AlertsForAllJobFailuresEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AlertsForAllReplicationIssuesEnabledInput`<sup>Optional</sup> <a name="AlertsForAllReplicationIssuesEnabledInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForAllReplicationIssuesEnabledInput"></a>

```csharp
public bool|IResolvable AlertsForAllReplicationIssuesEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AlertsForCriticalOperationFailuresEnabledInput`<sup>Optional</sup> <a name="AlertsForCriticalOperationFailuresEnabledInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForCriticalOperationFailuresEnabledInput"></a>

```csharp
public bool|IResolvable AlertsForCriticalOperationFailuresEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EmailNotificationsForSiteRecoveryEnabledInput`<sup>Optional</sup> <a name="EmailNotificationsForSiteRecoveryEnabledInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.emailNotificationsForSiteRecoveryEnabledInput"></a>

```csharp
public bool|IResolvable EmailNotificationsForSiteRecoveryEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AlertsForAllFailoverIssuesEnabled`<sup>Required</sup> <a name="AlertsForAllFailoverIssuesEnabled" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForAllFailoverIssuesEnabled"></a>

```csharp
public bool|IResolvable AlertsForAllFailoverIssuesEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AlertsForAllJobFailuresEnabled`<sup>Required</sup> <a name="AlertsForAllJobFailuresEnabled" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForAllJobFailuresEnabled"></a>

```csharp
public bool|IResolvable AlertsForAllJobFailuresEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AlertsForAllReplicationIssuesEnabled`<sup>Required</sup> <a name="AlertsForAllReplicationIssuesEnabled" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForAllReplicationIssuesEnabled"></a>

```csharp
public bool|IResolvable AlertsForAllReplicationIssuesEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AlertsForCriticalOperationFailuresEnabled`<sup>Required</sup> <a name="AlertsForCriticalOperationFailuresEnabled" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.alertsForCriticalOperationFailuresEnabled"></a>

```csharp
public bool|IResolvable AlertsForCriticalOperationFailuresEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EmailNotificationsForSiteRecoveryEnabled`<sup>Required</sup> <a name="EmailNotificationsForSiteRecoveryEnabled" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.emailNotificationsForSiteRecoveryEnabled"></a>

```csharp
public bool|IResolvable EmailNotificationsForSiteRecoveryEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoringOutputReference.property.internalValue"></a>

```csharp
public RecoveryServicesVaultMonitoring InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultMonitoring">RecoveryServicesVaultMonitoring</a>

---


### RecoveryServicesVaultTimeoutsOutputReference <a name="RecoveryServicesVaultTimeoutsOutputReference" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new RecoveryServicesVaultTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts">RecoveryServicesVaultTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RecoveryServicesVaultTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.recoveryServicesVault.RecoveryServicesVaultTimeouts">RecoveryServicesVaultTimeouts</a>

---



