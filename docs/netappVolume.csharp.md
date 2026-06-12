# `netappVolume` Submodule <a name="`netappVolume` Submodule" id="@cdktn/provider-azurerm.netappVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolume <a name="NetappVolume" id="@cdktn/provider-azurerm.netappVolume.NetappVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume azurerm_netapp_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NetappVolume(Construct Scope, string Id, NetappVolumeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig">NetappVolumeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig">NetappVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.putCoolAccess">PutCoolAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionAdvancedRansomware">PutDataProtectionAdvancedRansomware</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionBackupPolicy">PutDataProtectionBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionReplication">PutDataProtectionReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionSnapshotPolicy">PutDataProtectionSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.putExportPolicyRule">PutExportPolicyRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetAcceptGrowCapacityPoolForShortTermCloneSplit">ResetAcceptGrowCapacityPoolForShortTermCloneSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetAzureVmwareDataStoreEnabled">ResetAzureVmwareDataStoreEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetCoolAccess">ResetCoolAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetCreateFromSnapshotResourceId">ResetCreateFromSnapshotResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionAdvancedRansomware">ResetDataProtectionAdvancedRansomware</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionBackupPolicy">ResetDataProtectionBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionReplication">ResetDataProtectionReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionSnapshotPolicy">ResetDataProtectionSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetEncryptionKeySource">ResetEncryptionKeySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetExportPolicyRule">ResetExportPolicyRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetKerberosEnabled">ResetKerberosEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetKeyVaultPrivateEndpointId">ResetKeyVaultPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetLargeVolumeEnabled">ResetLargeVolumeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetNetworkFeatures">ResetNetworkFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetProtocols">ResetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSecurityStyle">ResetSecurityStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSmb3ProtocolEncryptionEnabled">ResetSmb3ProtocolEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSmbAccessBasedEnumerationEnabled">ResetSmbAccessBasedEnumerationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSmbContinuousAvailabilityEnabled">ResetSmbContinuousAvailabilityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSmbNonBrowsableEnabled">ResetSmbNonBrowsableEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSnapshotDirectoryVisible">ResetSnapshotDirectoryVisible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetThroughputInMibps">ResetThroughputInMibps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCoolAccess` <a name="PutCoolAccess" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putCoolAccess"></a>

```csharp
private void PutCoolAccess(NetappVolumeCoolAccess Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putCoolAccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess">NetappVolumeCoolAccess</a>

---

##### `PutDataProtectionAdvancedRansomware` <a name="PutDataProtectionAdvancedRansomware" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionAdvancedRansomware"></a>

```csharp
private void PutDataProtectionAdvancedRansomware(NetappVolumeDataProtectionAdvancedRansomware Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionAdvancedRansomware.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware">NetappVolumeDataProtectionAdvancedRansomware</a>

---

##### `PutDataProtectionBackupPolicy` <a name="PutDataProtectionBackupPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionBackupPolicy"></a>

```csharp
private void PutDataProtectionBackupPolicy(NetappVolumeDataProtectionBackupPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionBackupPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a>

---

##### `PutDataProtectionReplication` <a name="PutDataProtectionReplication" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionReplication"></a>

```csharp
private void PutDataProtectionReplication(NetappVolumeDataProtectionReplication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionReplication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a>

---

##### `PutDataProtectionSnapshotPolicy` <a name="PutDataProtectionSnapshotPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionSnapshotPolicy"></a>

```csharp
private void PutDataProtectionSnapshotPolicy(NetappVolumeDataProtectionSnapshotPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putDataProtectionSnapshotPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a>

---

##### `PutExportPolicyRule` <a name="PutExportPolicyRule" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putExportPolicyRule"></a>

```csharp
private void PutExportPolicyRule(IResolvable|NetappVolumeExportPolicyRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putExportPolicyRule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putTimeouts"></a>

```csharp
private void PutTimeouts(NetappVolumeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

---

##### `ResetAcceptGrowCapacityPoolForShortTermCloneSplit` <a name="ResetAcceptGrowCapacityPoolForShortTermCloneSplit" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetAcceptGrowCapacityPoolForShortTermCloneSplit"></a>

```csharp
private void ResetAcceptGrowCapacityPoolForShortTermCloneSplit()
```

##### `ResetAzureVmwareDataStoreEnabled` <a name="ResetAzureVmwareDataStoreEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetAzureVmwareDataStoreEnabled"></a>

```csharp
private void ResetAzureVmwareDataStoreEnabled()
```

##### `ResetCoolAccess` <a name="ResetCoolAccess" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetCoolAccess"></a>

```csharp
private void ResetCoolAccess()
```

##### `ResetCreateFromSnapshotResourceId` <a name="ResetCreateFromSnapshotResourceId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetCreateFromSnapshotResourceId"></a>

```csharp
private void ResetCreateFromSnapshotResourceId()
```

##### `ResetDataProtectionAdvancedRansomware` <a name="ResetDataProtectionAdvancedRansomware" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionAdvancedRansomware"></a>

```csharp
private void ResetDataProtectionAdvancedRansomware()
```

##### `ResetDataProtectionBackupPolicy` <a name="ResetDataProtectionBackupPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionBackupPolicy"></a>

```csharp
private void ResetDataProtectionBackupPolicy()
```

##### `ResetDataProtectionReplication` <a name="ResetDataProtectionReplication" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionReplication"></a>

```csharp
private void ResetDataProtectionReplication()
```

##### `ResetDataProtectionSnapshotPolicy` <a name="ResetDataProtectionSnapshotPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetDataProtectionSnapshotPolicy"></a>

```csharp
private void ResetDataProtectionSnapshotPolicy()
```

##### `ResetEncryptionKeySource` <a name="ResetEncryptionKeySource" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetEncryptionKeySource"></a>

```csharp
private void ResetEncryptionKeySource()
```

##### `ResetExportPolicyRule` <a name="ResetExportPolicyRule" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetExportPolicyRule"></a>

```csharp
private void ResetExportPolicyRule()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKerberosEnabled` <a name="ResetKerberosEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetKerberosEnabled"></a>

```csharp
private void ResetKerberosEnabled()
```

##### `ResetKeyVaultPrivateEndpointId` <a name="ResetKeyVaultPrivateEndpointId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetKeyVaultPrivateEndpointId"></a>

```csharp
private void ResetKeyVaultPrivateEndpointId()
```

##### `ResetLargeVolumeEnabled` <a name="ResetLargeVolumeEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetLargeVolumeEnabled"></a>

```csharp
private void ResetLargeVolumeEnabled()
```

##### `ResetNetworkFeatures` <a name="ResetNetworkFeatures" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetNetworkFeatures"></a>

```csharp
private void ResetNetworkFeatures()
```

##### `ResetProtocols` <a name="ResetProtocols" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetProtocols"></a>

```csharp
private void ResetProtocols()
```

##### `ResetSecurityStyle` <a name="ResetSecurityStyle" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSecurityStyle"></a>

```csharp
private void ResetSecurityStyle()
```

##### `ResetSmb3ProtocolEncryptionEnabled` <a name="ResetSmb3ProtocolEncryptionEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSmb3ProtocolEncryptionEnabled"></a>

```csharp
private void ResetSmb3ProtocolEncryptionEnabled()
```

##### `ResetSmbAccessBasedEnumerationEnabled` <a name="ResetSmbAccessBasedEnumerationEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSmbAccessBasedEnumerationEnabled"></a>

```csharp
private void ResetSmbAccessBasedEnumerationEnabled()
```

##### `ResetSmbContinuousAvailabilityEnabled` <a name="ResetSmbContinuousAvailabilityEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSmbContinuousAvailabilityEnabled"></a>

```csharp
private void ResetSmbContinuousAvailabilityEnabled()
```

##### `ResetSmbNonBrowsableEnabled` <a name="ResetSmbNonBrowsableEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSmbNonBrowsableEnabled"></a>

```csharp
private void ResetSmbNonBrowsableEnabled()
```

##### `ResetSnapshotDirectoryVisible` <a name="ResetSnapshotDirectoryVisible" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetSnapshotDirectoryVisible"></a>

```csharp
private void ResetSnapshotDirectoryVisible()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetThroughputInMibps` <a name="ResetThroughputInMibps" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetThroughputInMibps"></a>

```csharp
private void ResetThroughputInMibps()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetappVolume resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

NetappVolume.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

NetappVolume.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

NetappVolume.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

NetappVolume.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetappVolume resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetappVolume to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetappVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetappVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.coolAccess">CoolAccess</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference">NetappVolumeCoolAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionAdvancedRansomware">DataProtectionAdvancedRansomware</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference">NetappVolumeDataProtectionAdvancedRansomwareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionBackupPolicy">DataProtectionBackupPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference">NetappVolumeDataProtectionBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionReplication">DataProtectionReplication</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference">NetappVolumeDataProtectionReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionSnapshotPolicy">DataProtectionSnapshotPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference">NetappVolumeDataProtectionSnapshotPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.exportPolicyRule">ExportPolicyRule</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList">NetappVolumeExportPolicyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.mountIpAddresses">MountIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference">NetappVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.acceptGrowCapacityPoolForShortTermCloneSplitInput">AcceptGrowCapacityPoolForShortTermCloneSplitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.accountNameInput">AccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.azureVmwareDataStoreEnabledInput">AzureVmwareDataStoreEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.coolAccessInput">CoolAccessInput</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess">NetappVolumeCoolAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.createFromSnapshotResourceIdInput">CreateFromSnapshotResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionAdvancedRansomwareInput">DataProtectionAdvancedRansomwareInput</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware">NetappVolumeDataProtectionAdvancedRansomware</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionBackupPolicyInput">DataProtectionBackupPolicyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionReplicationInput">DataProtectionReplicationInput</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionSnapshotPolicyInput">DataProtectionSnapshotPolicyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.encryptionKeySourceInput">EncryptionKeySourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.exportPolicyRuleInput">ExportPolicyRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.kerberosEnabledInput">KerberosEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.keyVaultPrivateEndpointIdInput">KeyVaultPrivateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.largeVolumeEnabledInput">LargeVolumeEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.networkFeaturesInput">NetworkFeaturesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.poolNameInput">PoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.protocolsInput">ProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.securityStyleInput">SecurityStyleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.serviceLevelInput">ServiceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smb3ProtocolEncryptionEnabledInput">Smb3ProtocolEncryptionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbAccessBasedEnumerationEnabledInput">SmbAccessBasedEnumerationEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbContinuousAvailabilityEnabledInput">SmbContinuousAvailabilityEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbNonBrowsableEnabledInput">SmbNonBrowsableEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.snapshotDirectoryVisibleInput">SnapshotDirectoryVisibleInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.storageQuotaInGbInput">StorageQuotaInGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.throughputInMibpsInput">ThroughputInMibpsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.volumePathInput">VolumePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.acceptGrowCapacityPoolForShortTermCloneSplit">AcceptGrowCapacityPoolForShortTermCloneSplit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.accountName">AccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.azureVmwareDataStoreEnabled">AzureVmwareDataStoreEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.createFromSnapshotResourceId">CreateFromSnapshotResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.encryptionKeySource">EncryptionKeySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.kerberosEnabled">KerberosEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.keyVaultPrivateEndpointId">KeyVaultPrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.largeVolumeEnabled">LargeVolumeEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.networkFeatures">NetworkFeatures</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.poolName">PoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.protocols">Protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.securityStyle">SecurityStyle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.serviceLevel">ServiceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smb3ProtocolEncryptionEnabled">Smb3ProtocolEncryptionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbAccessBasedEnumerationEnabled">SmbAccessBasedEnumerationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbContinuousAvailabilityEnabled">SmbContinuousAvailabilityEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbNonBrowsableEnabled">SmbNonBrowsableEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.snapshotDirectoryVisible">SnapshotDirectoryVisible</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.storageQuotaInGb">StorageQuotaInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.throughputInMibps">ThroughputInMibps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.volumePath">VolumePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CoolAccess`<sup>Required</sup> <a name="CoolAccess" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.coolAccess"></a>

```csharp
public NetappVolumeCoolAccessOutputReference CoolAccess { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference">NetappVolumeCoolAccessOutputReference</a>

---

##### `DataProtectionAdvancedRansomware`<sup>Required</sup> <a name="DataProtectionAdvancedRansomware" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionAdvancedRansomware"></a>

```csharp
public NetappVolumeDataProtectionAdvancedRansomwareOutputReference DataProtectionAdvancedRansomware { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference">NetappVolumeDataProtectionAdvancedRansomwareOutputReference</a>

---

##### `DataProtectionBackupPolicy`<sup>Required</sup> <a name="DataProtectionBackupPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionBackupPolicy"></a>

```csharp
public NetappVolumeDataProtectionBackupPolicyOutputReference DataProtectionBackupPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference">NetappVolumeDataProtectionBackupPolicyOutputReference</a>

---

##### `DataProtectionReplication`<sup>Required</sup> <a name="DataProtectionReplication" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionReplication"></a>

```csharp
public NetappVolumeDataProtectionReplicationOutputReference DataProtectionReplication { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference">NetappVolumeDataProtectionReplicationOutputReference</a>

---

##### `DataProtectionSnapshotPolicy`<sup>Required</sup> <a name="DataProtectionSnapshotPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionSnapshotPolicy"></a>

```csharp
public NetappVolumeDataProtectionSnapshotPolicyOutputReference DataProtectionSnapshotPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference">NetappVolumeDataProtectionSnapshotPolicyOutputReference</a>

---

##### `ExportPolicyRule`<sup>Required</sup> <a name="ExportPolicyRule" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.exportPolicyRule"></a>

```csharp
public NetappVolumeExportPolicyRuleList ExportPolicyRule { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList">NetappVolumeExportPolicyRuleList</a>

---

##### `MountIpAddresses`<sup>Required</sup> <a name="MountIpAddresses" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.mountIpAddresses"></a>

```csharp
public string[] MountIpAddresses { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.timeouts"></a>

```csharp
public NetappVolumeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference">NetappVolumeTimeoutsOutputReference</a>

---

##### `AcceptGrowCapacityPoolForShortTermCloneSplitInput`<sup>Optional</sup> <a name="AcceptGrowCapacityPoolForShortTermCloneSplitInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.acceptGrowCapacityPoolForShortTermCloneSplitInput"></a>

```csharp
public string AcceptGrowCapacityPoolForShortTermCloneSplitInput { get; }
```

- *Type:* string

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.accountNameInput"></a>

```csharp
public string AccountNameInput { get; }
```

- *Type:* string

---

##### `AzureVmwareDataStoreEnabledInput`<sup>Optional</sup> <a name="AzureVmwareDataStoreEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.azureVmwareDataStoreEnabledInput"></a>

```csharp
public bool|IResolvable AzureVmwareDataStoreEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CoolAccessInput`<sup>Optional</sup> <a name="CoolAccessInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.coolAccessInput"></a>

```csharp
public NetappVolumeCoolAccess CoolAccessInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess">NetappVolumeCoolAccess</a>

---

##### `CreateFromSnapshotResourceIdInput`<sup>Optional</sup> <a name="CreateFromSnapshotResourceIdInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.createFromSnapshotResourceIdInput"></a>

```csharp
public string CreateFromSnapshotResourceIdInput { get; }
```

- *Type:* string

---

##### `DataProtectionAdvancedRansomwareInput`<sup>Optional</sup> <a name="DataProtectionAdvancedRansomwareInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionAdvancedRansomwareInput"></a>

```csharp
public NetappVolumeDataProtectionAdvancedRansomware DataProtectionAdvancedRansomwareInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware">NetappVolumeDataProtectionAdvancedRansomware</a>

---

##### `DataProtectionBackupPolicyInput`<sup>Optional</sup> <a name="DataProtectionBackupPolicyInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionBackupPolicyInput"></a>

```csharp
public NetappVolumeDataProtectionBackupPolicy DataProtectionBackupPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a>

---

##### `DataProtectionReplicationInput`<sup>Optional</sup> <a name="DataProtectionReplicationInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionReplicationInput"></a>

```csharp
public NetappVolumeDataProtectionReplication DataProtectionReplicationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a>

---

##### `DataProtectionSnapshotPolicyInput`<sup>Optional</sup> <a name="DataProtectionSnapshotPolicyInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.dataProtectionSnapshotPolicyInput"></a>

```csharp
public NetappVolumeDataProtectionSnapshotPolicy DataProtectionSnapshotPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a>

---

##### `EncryptionKeySourceInput`<sup>Optional</sup> <a name="EncryptionKeySourceInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.encryptionKeySourceInput"></a>

```csharp
public string EncryptionKeySourceInput { get; }
```

- *Type:* string

---

##### `ExportPolicyRuleInput`<sup>Optional</sup> <a name="ExportPolicyRuleInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.exportPolicyRuleInput"></a>

```csharp
public IResolvable|NetappVolumeExportPolicyRule[] ExportPolicyRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KerberosEnabledInput`<sup>Optional</sup> <a name="KerberosEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.kerberosEnabledInput"></a>

```csharp
public bool|IResolvable KerberosEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeyVaultPrivateEndpointIdInput`<sup>Optional</sup> <a name="KeyVaultPrivateEndpointIdInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.keyVaultPrivateEndpointIdInput"></a>

```csharp
public string KeyVaultPrivateEndpointIdInput { get; }
```

- *Type:* string

---

##### `LargeVolumeEnabledInput`<sup>Optional</sup> <a name="LargeVolumeEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.largeVolumeEnabledInput"></a>

```csharp
public bool|IResolvable LargeVolumeEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkFeaturesInput`<sup>Optional</sup> <a name="NetworkFeaturesInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.networkFeaturesInput"></a>

```csharp
public string NetworkFeaturesInput { get; }
```

- *Type:* string

---

##### `PoolNameInput`<sup>Optional</sup> <a name="PoolNameInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.poolNameInput"></a>

```csharp
public string PoolNameInput { get; }
```

- *Type:* string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.protocolsInput"></a>

```csharp
public string[] ProtocolsInput { get; }
```

- *Type:* string[]

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SecurityStyleInput`<sup>Optional</sup> <a name="SecurityStyleInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.securityStyleInput"></a>

```csharp
public string SecurityStyleInput { get; }
```

- *Type:* string

---

##### `ServiceLevelInput`<sup>Optional</sup> <a name="ServiceLevelInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.serviceLevelInput"></a>

```csharp
public string ServiceLevelInput { get; }
```

- *Type:* string

---

##### `Smb3ProtocolEncryptionEnabledInput`<sup>Optional</sup> <a name="Smb3ProtocolEncryptionEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smb3ProtocolEncryptionEnabledInput"></a>

```csharp
public bool|IResolvable Smb3ProtocolEncryptionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SmbAccessBasedEnumerationEnabledInput`<sup>Optional</sup> <a name="SmbAccessBasedEnumerationEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbAccessBasedEnumerationEnabledInput"></a>

```csharp
public bool|IResolvable SmbAccessBasedEnumerationEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SmbContinuousAvailabilityEnabledInput`<sup>Optional</sup> <a name="SmbContinuousAvailabilityEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbContinuousAvailabilityEnabledInput"></a>

```csharp
public bool|IResolvable SmbContinuousAvailabilityEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SmbNonBrowsableEnabledInput`<sup>Optional</sup> <a name="SmbNonBrowsableEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbNonBrowsableEnabledInput"></a>

```csharp
public bool|IResolvable SmbNonBrowsableEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SnapshotDirectoryVisibleInput`<sup>Optional</sup> <a name="SnapshotDirectoryVisibleInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.snapshotDirectoryVisibleInput"></a>

```csharp
public bool|IResolvable SnapshotDirectoryVisibleInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StorageQuotaInGbInput`<sup>Optional</sup> <a name="StorageQuotaInGbInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.storageQuotaInGbInput"></a>

```csharp
public double StorageQuotaInGbInput { get; }
```

- *Type:* double

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThroughputInMibpsInput`<sup>Optional</sup> <a name="ThroughputInMibpsInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.throughputInMibpsInput"></a>

```csharp
public double ThroughputInMibpsInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.timeoutsInput"></a>

```csharp
public IResolvable|NetappVolumeTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

---

##### `VolumePathInput`<sup>Optional</sup> <a name="VolumePathInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.volumePathInput"></a>

```csharp
public string VolumePathInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `AcceptGrowCapacityPoolForShortTermCloneSplit`<sup>Required</sup> <a name="AcceptGrowCapacityPoolForShortTermCloneSplit" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.acceptGrowCapacityPoolForShortTermCloneSplit"></a>

```csharp
public string AcceptGrowCapacityPoolForShortTermCloneSplit { get; }
```

- *Type:* string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.accountName"></a>

```csharp
public string AccountName { get; }
```

- *Type:* string

---

##### `AzureVmwareDataStoreEnabled`<sup>Required</sup> <a name="AzureVmwareDataStoreEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.azureVmwareDataStoreEnabled"></a>

```csharp
public bool|IResolvable AzureVmwareDataStoreEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CreateFromSnapshotResourceId`<sup>Required</sup> <a name="CreateFromSnapshotResourceId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.createFromSnapshotResourceId"></a>

```csharp
public string CreateFromSnapshotResourceId { get; }
```

- *Type:* string

---

##### `EncryptionKeySource`<sup>Required</sup> <a name="EncryptionKeySource" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.encryptionKeySource"></a>

```csharp
public string EncryptionKeySource { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KerberosEnabled`<sup>Required</sup> <a name="KerberosEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.kerberosEnabled"></a>

```csharp
public bool|IResolvable KerberosEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeyVaultPrivateEndpointId`<sup>Required</sup> <a name="KeyVaultPrivateEndpointId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.keyVaultPrivateEndpointId"></a>

```csharp
public string KeyVaultPrivateEndpointId { get; }
```

- *Type:* string

---

##### `LargeVolumeEnabled`<sup>Required</sup> <a name="LargeVolumeEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.largeVolumeEnabled"></a>

```csharp
public bool|IResolvable LargeVolumeEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkFeatures`<sup>Required</sup> <a name="NetworkFeatures" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.networkFeatures"></a>

```csharp
public string NetworkFeatures { get; }
```

- *Type:* string

---

##### `PoolName`<sup>Required</sup> <a name="PoolName" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.poolName"></a>

```csharp
public string PoolName { get; }
```

- *Type:* string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.protocols"></a>

```csharp
public string[] Protocols { get; }
```

- *Type:* string[]

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SecurityStyle`<sup>Required</sup> <a name="SecurityStyle" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.securityStyle"></a>

```csharp
public string SecurityStyle { get; }
```

- *Type:* string

---

##### `ServiceLevel`<sup>Required</sup> <a name="ServiceLevel" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.serviceLevel"></a>

```csharp
public string ServiceLevel { get; }
```

- *Type:* string

---

##### `Smb3ProtocolEncryptionEnabled`<sup>Required</sup> <a name="Smb3ProtocolEncryptionEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smb3ProtocolEncryptionEnabled"></a>

```csharp
public bool|IResolvable Smb3ProtocolEncryptionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SmbAccessBasedEnumerationEnabled`<sup>Required</sup> <a name="SmbAccessBasedEnumerationEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbAccessBasedEnumerationEnabled"></a>

```csharp
public bool|IResolvable SmbAccessBasedEnumerationEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SmbContinuousAvailabilityEnabled`<sup>Required</sup> <a name="SmbContinuousAvailabilityEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbContinuousAvailabilityEnabled"></a>

```csharp
public bool|IResolvable SmbContinuousAvailabilityEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SmbNonBrowsableEnabled`<sup>Required</sup> <a name="SmbNonBrowsableEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.smbNonBrowsableEnabled"></a>

```csharp
public bool|IResolvable SmbNonBrowsableEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SnapshotDirectoryVisible`<sup>Required</sup> <a name="SnapshotDirectoryVisible" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.snapshotDirectoryVisible"></a>

```csharp
public bool|IResolvable SnapshotDirectoryVisible { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StorageQuotaInGb`<sup>Required</sup> <a name="StorageQuotaInGb" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.storageQuotaInGb"></a>

```csharp
public double StorageQuotaInGb { get; }
```

- *Type:* double

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThroughputInMibps`<sup>Required</sup> <a name="ThroughputInMibps" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.throughputInMibps"></a>

```csharp
public double ThroughputInMibps { get; }
```

- *Type:* double

---

##### `VolumePath`<sup>Required</sup> <a name="VolumePath" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.volumePath"></a>

```csharp
public string VolumePath { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolume.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.netappVolume.NetappVolume.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeConfig <a name="NetappVolumeConfig" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NetappVolumeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountName,
    string Location,
    string Name,
    string PoolName,
    string ResourceGroupName,
    string ServiceLevel,
    double StorageQuotaInGb,
    string SubnetId,
    string VolumePath,
    string AcceptGrowCapacityPoolForShortTermCloneSplit = null,
    bool|IResolvable AzureVmwareDataStoreEnabled = null,
    NetappVolumeCoolAccess CoolAccess = null,
    string CreateFromSnapshotResourceId = null,
    NetappVolumeDataProtectionAdvancedRansomware DataProtectionAdvancedRansomware = null,
    NetappVolumeDataProtectionBackupPolicy DataProtectionBackupPolicy = null,
    NetappVolumeDataProtectionReplication DataProtectionReplication = null,
    NetappVolumeDataProtectionSnapshotPolicy DataProtectionSnapshotPolicy = null,
    string EncryptionKeySource = null,
    IResolvable|NetappVolumeExportPolicyRule[] ExportPolicyRule = null,
    string Id = null,
    bool|IResolvable KerberosEnabled = null,
    string KeyVaultPrivateEndpointId = null,
    bool|IResolvable LargeVolumeEnabled = null,
    string NetworkFeatures = null,
    string[] Protocols = null,
    string SecurityStyle = null,
    bool|IResolvable Smb3ProtocolEncryptionEnabled = null,
    bool|IResolvable SmbAccessBasedEnumerationEnabled = null,
    bool|IResolvable SmbContinuousAvailabilityEnabled = null,
    bool|IResolvable SmbNonBrowsableEnabled = null,
    bool|IResolvable SnapshotDirectoryVisible = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    double ThroughputInMibps = null,
    NetappVolumeTimeouts Timeouts = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.accountName">AccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#account_name NetappVolume#account_name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#location NetappVolume#location}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#name NetappVolume#name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.poolName">PoolName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#pool_name NetappVolume#pool_name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#resource_group_name NetappVolume#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.serviceLevel">ServiceLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#service_level NetappVolume#service_level}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.storageQuotaInGb">StorageQuotaInGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#storage_quota_in_gb NetappVolume#storage_quota_in_gb}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#subnet_id NetappVolume#subnet_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.volumePath">VolumePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#volume_path NetappVolume#volume_path}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.acceptGrowCapacityPoolForShortTermCloneSplit">AcceptGrowCapacityPoolForShortTermCloneSplit</a></code> | <code>string</code> | While auto splitting the short term clone volume, if the parent pool does not have enough space to accommodate the volume after split, it will be automatically resized, which will lead to increased billing. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.azureVmwareDataStoreEnabled">AzureVmwareDataStoreEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#azure_vmware_data_store_enabled NetappVolume#azure_vmware_data_store_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.coolAccess">CoolAccess</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess">NetappVolumeCoolAccess</a></code> | cool_access block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.createFromSnapshotResourceId">CreateFromSnapshotResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#create_from_snapshot_resource_id NetappVolume#create_from_snapshot_resource_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionAdvancedRansomware">DataProtectionAdvancedRansomware</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware">NetappVolumeDataProtectionAdvancedRansomware</a></code> | data_protection_advanced_ransomware block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionBackupPolicy">DataProtectionBackupPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a></code> | data_protection_backup_policy block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionReplication">DataProtectionReplication</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a></code> | data_protection_replication block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionSnapshotPolicy">DataProtectionSnapshotPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a></code> | data_protection_snapshot_policy block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.encryptionKeySource">EncryptionKeySource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#encryption_key_source NetappVolume#encryption_key_source}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.exportPolicyRule">ExportPolicyRule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>[]</code> | export_policy_rule block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#id NetappVolume#id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.kerberosEnabled">KerberosEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable to allow Kerberos secured volumes. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.keyVaultPrivateEndpointId">KeyVaultPrivateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#key_vault_private_endpoint_id NetappVolume#key_vault_private_endpoint_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.largeVolumeEnabled">LargeVolumeEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the volume is a large volume. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.networkFeatures">NetworkFeatures</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#network_features NetappVolume#network_features}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.protocols">Protocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#protocols NetappVolume#protocols}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.securityStyle">SecurityStyle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#security_style NetappVolume#security_style}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.smb3ProtocolEncryptionEnabled">Smb3ProtocolEncryptionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | SMB3 encryption option should be used only for SMB/DualProtocol volumes. Using it for any other workloads is not supported. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.smbAccessBasedEnumerationEnabled">SmbAccessBasedEnumerationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable access based enumeration setting for SMB/Dual Protocol volume. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.smbContinuousAvailabilityEnabled">SmbContinuousAvailabilityEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Continuous availability option should be used only for SQL and FSLogix workloads. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.smbNonBrowsableEnabled">SmbNonBrowsableEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable non browsable share setting for SMB/Dual Protocol volume. When enabled, it restricts windows clients to browse the share. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.snapshotDirectoryVisible">SnapshotDirectoryVisible</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#snapshot_directory_visible NetappVolume#snapshot_directory_visible}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#tags NetappVolume#tags}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.throughputInMibps">ThroughputInMibps</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#throughput_in_mibps NetappVolume#throughput_in_mibps}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.zone">Zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#zone NetappVolume#zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.accountName"></a>

```csharp
public string AccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#account_name NetappVolume#account_name}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#location NetappVolume#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#name NetappVolume#name}.

---

##### `PoolName`<sup>Required</sup> <a name="PoolName" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.poolName"></a>

```csharp
public string PoolName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#pool_name NetappVolume#pool_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#resource_group_name NetappVolume#resource_group_name}.

---

##### `ServiceLevel`<sup>Required</sup> <a name="ServiceLevel" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.serviceLevel"></a>

```csharp
public string ServiceLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#service_level NetappVolume#service_level}.

---

##### `StorageQuotaInGb`<sup>Required</sup> <a name="StorageQuotaInGb" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.storageQuotaInGb"></a>

```csharp
public double StorageQuotaInGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#storage_quota_in_gb NetappVolume#storage_quota_in_gb}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#subnet_id NetappVolume#subnet_id}.

---

##### `VolumePath`<sup>Required</sup> <a name="VolumePath" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.volumePath"></a>

```csharp
public string VolumePath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#volume_path NetappVolume#volume_path}.

---

##### `AcceptGrowCapacityPoolForShortTermCloneSplit`<sup>Optional</sup> <a name="AcceptGrowCapacityPoolForShortTermCloneSplit" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.acceptGrowCapacityPoolForShortTermCloneSplit"></a>

```csharp
public string AcceptGrowCapacityPoolForShortTermCloneSplit { get; set; }
```

- *Type:* string

While auto splitting the short term clone volume, if the parent pool does not have enough space to accommodate the volume after split, it will be automatically resized, which will lead to increased billing.

To accept capacity pool size auto grow and create a short term clone volume, set the property as accepted. Can only be used in conjunction with `create_from_snapshot_resource_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#accept_grow_capacity_pool_for_short_term_clone_split NetappVolume#accept_grow_capacity_pool_for_short_term_clone_split}

---

##### `AzureVmwareDataStoreEnabled`<sup>Optional</sup> <a name="AzureVmwareDataStoreEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.azureVmwareDataStoreEnabled"></a>

```csharp
public bool|IResolvable AzureVmwareDataStoreEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#azure_vmware_data_store_enabled NetappVolume#azure_vmware_data_store_enabled}.

---

##### `CoolAccess`<sup>Optional</sup> <a name="CoolAccess" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.coolAccess"></a>

```csharp
public NetappVolumeCoolAccess CoolAccess { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess">NetappVolumeCoolAccess</a>

cool_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#cool_access NetappVolume#cool_access}

---

##### `CreateFromSnapshotResourceId`<sup>Optional</sup> <a name="CreateFromSnapshotResourceId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.createFromSnapshotResourceId"></a>

```csharp
public string CreateFromSnapshotResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#create_from_snapshot_resource_id NetappVolume#create_from_snapshot_resource_id}.

---

##### `DataProtectionAdvancedRansomware`<sup>Optional</sup> <a name="DataProtectionAdvancedRansomware" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionAdvancedRansomware"></a>

```csharp
public NetappVolumeDataProtectionAdvancedRansomware DataProtectionAdvancedRansomware { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware">NetappVolumeDataProtectionAdvancedRansomware</a>

data_protection_advanced_ransomware block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#data_protection_advanced_ransomware NetappVolume#data_protection_advanced_ransomware}

---

##### `DataProtectionBackupPolicy`<sup>Optional</sup> <a name="DataProtectionBackupPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionBackupPolicy"></a>

```csharp
public NetappVolumeDataProtectionBackupPolicy DataProtectionBackupPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a>

data_protection_backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#data_protection_backup_policy NetappVolume#data_protection_backup_policy}

---

##### `DataProtectionReplication`<sup>Optional</sup> <a name="DataProtectionReplication" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionReplication"></a>

```csharp
public NetappVolumeDataProtectionReplication DataProtectionReplication { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a>

data_protection_replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#data_protection_replication NetappVolume#data_protection_replication}

---

##### `DataProtectionSnapshotPolicy`<sup>Optional</sup> <a name="DataProtectionSnapshotPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.dataProtectionSnapshotPolicy"></a>

```csharp
public NetappVolumeDataProtectionSnapshotPolicy DataProtectionSnapshotPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a>

data_protection_snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#data_protection_snapshot_policy NetappVolume#data_protection_snapshot_policy}

---

##### `EncryptionKeySource`<sup>Optional</sup> <a name="EncryptionKeySource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.encryptionKeySource"></a>

```csharp
public string EncryptionKeySource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#encryption_key_source NetappVolume#encryption_key_source}.

---

##### `ExportPolicyRule`<sup>Optional</sup> <a name="ExportPolicyRule" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.exportPolicyRule"></a>

```csharp
public IResolvable|NetappVolumeExportPolicyRule[] ExportPolicyRule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>[]

export_policy_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#export_policy_rule NetappVolume#export_policy_rule}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#id NetappVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KerberosEnabled`<sup>Optional</sup> <a name="KerberosEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.kerberosEnabled"></a>

```csharp
public bool|IResolvable KerberosEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable to allow Kerberos secured volumes.

Requires appropriate export rules as well as the parent `azurerm_netapp_account` having a defined AD connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#kerberos_enabled NetappVolume#kerberos_enabled}

---

##### `KeyVaultPrivateEndpointId`<sup>Optional</sup> <a name="KeyVaultPrivateEndpointId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.keyVaultPrivateEndpointId"></a>

```csharp
public string KeyVaultPrivateEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#key_vault_private_endpoint_id NetappVolume#key_vault_private_endpoint_id}.

---

##### `LargeVolumeEnabled`<sup>Optional</sup> <a name="LargeVolumeEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.largeVolumeEnabled"></a>

```csharp
public bool|IResolvable LargeVolumeEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the volume is a large volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#large_volume_enabled NetappVolume#large_volume_enabled}

---

##### `NetworkFeatures`<sup>Optional</sup> <a name="NetworkFeatures" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.networkFeatures"></a>

```csharp
public string NetworkFeatures { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#network_features NetappVolume#network_features}.

---

##### `Protocols`<sup>Optional</sup> <a name="Protocols" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.protocols"></a>

```csharp
public string[] Protocols { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#protocols NetappVolume#protocols}.

---

##### `SecurityStyle`<sup>Optional</sup> <a name="SecurityStyle" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.securityStyle"></a>

```csharp
public string SecurityStyle { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#security_style NetappVolume#security_style}.

---

##### `Smb3ProtocolEncryptionEnabled`<sup>Optional</sup> <a name="Smb3ProtocolEncryptionEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.smb3ProtocolEncryptionEnabled"></a>

```csharp
public bool|IResolvable Smb3ProtocolEncryptionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

SMB3 encryption option should be used only for SMB/DualProtocol volumes. Using it for any other workloads is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#smb3_protocol_encryption_enabled NetappVolume#smb3_protocol_encryption_enabled}

---

##### `SmbAccessBasedEnumerationEnabled`<sup>Optional</sup> <a name="SmbAccessBasedEnumerationEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.smbAccessBasedEnumerationEnabled"></a>

```csharp
public bool|IResolvable SmbAccessBasedEnumerationEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable access based enumeration setting for SMB/Dual Protocol volume.

When enabled, users who do not have permission to access a shared folder or file underneath it, do not see that shared resource displayed in their environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#smb_access_based_enumeration_enabled NetappVolume#smb_access_based_enumeration_enabled}

---

##### `SmbContinuousAvailabilityEnabled`<sup>Optional</sup> <a name="SmbContinuousAvailabilityEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.smbContinuousAvailabilityEnabled"></a>

```csharp
public bool|IResolvable SmbContinuousAvailabilityEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Continuous availability option should be used only for SQL and FSLogix workloads.

Using it for any other SMB workloads is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#smb_continuous_availability_enabled NetappVolume#smb_continuous_availability_enabled}

---

##### `SmbNonBrowsableEnabled`<sup>Optional</sup> <a name="SmbNonBrowsableEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.smbNonBrowsableEnabled"></a>

```csharp
public bool|IResolvable SmbNonBrowsableEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable non browsable share setting for SMB/Dual Protocol volume. When enabled, it restricts windows clients to browse the share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#smb_non_browsable_enabled NetappVolume#smb_non_browsable_enabled}

---

##### `SnapshotDirectoryVisible`<sup>Optional</sup> <a name="SnapshotDirectoryVisible" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.snapshotDirectoryVisible"></a>

```csharp
public bool|IResolvable SnapshotDirectoryVisible { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#snapshot_directory_visible NetappVolume#snapshot_directory_visible}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#tags NetappVolume#tags}.

---

##### `ThroughputInMibps`<sup>Optional</sup> <a name="ThroughputInMibps" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.throughputInMibps"></a>

```csharp
public double ThroughputInMibps { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#throughput_in_mibps NetappVolume#throughput_in_mibps}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.timeouts"></a>

```csharp
public NetappVolumeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#timeouts NetappVolume#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#zone NetappVolume#zone}.

---

### NetappVolumeCoolAccess <a name="NetappVolumeCoolAccess" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NetappVolumeCoolAccess {
    double CoolnessPeriodInDays,
    string RetrievalPolicy,
    string TieringPolicy
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess.property.coolnessPeriodInDays">CoolnessPeriodInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#coolness_period_in_days NetappVolume#coolness_period_in_days}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess.property.retrievalPolicy">RetrievalPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#retrieval_policy NetappVolume#retrieval_policy}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess.property.tieringPolicy">TieringPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#tiering_policy NetappVolume#tiering_policy}. |

---

##### `CoolnessPeriodInDays`<sup>Required</sup> <a name="CoolnessPeriodInDays" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess.property.coolnessPeriodInDays"></a>

```csharp
public double CoolnessPeriodInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#coolness_period_in_days NetappVolume#coolness_period_in_days}.

---

##### `RetrievalPolicy`<sup>Required</sup> <a name="RetrievalPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess.property.retrievalPolicy"></a>

```csharp
public string RetrievalPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#retrieval_policy NetappVolume#retrieval_policy}.

---

##### `TieringPolicy`<sup>Required</sup> <a name="TieringPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess.property.tieringPolicy"></a>

```csharp
public string TieringPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#tiering_policy NetappVolume#tiering_policy}.

---

### NetappVolumeDataProtectionAdvancedRansomware <a name="NetappVolumeDataProtectionAdvancedRansomware" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NetappVolumeDataProtectionAdvancedRansomware {
    bool|IResolvable ProtectionEnabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware.property.protectionEnabled">ProtectionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable or disable the Advanced Ransomware Protection feature. |

---

##### `ProtectionEnabled`<sup>Required</sup> <a name="ProtectionEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware.property.protectionEnabled"></a>

```csharp
public bool|IResolvable ProtectionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable or disable the Advanced Ransomware Protection feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#protection_enabled NetappVolume#protection_enabled}

---

### NetappVolumeDataProtectionBackupPolicy <a name="NetappVolumeDataProtectionBackupPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NetappVolumeDataProtectionBackupPolicy {
    string BackupPolicyId,
    string BackupVaultId,
    bool|IResolvable PolicyEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.property.backupPolicyId">BackupPolicyId</a></code> | <code>string</code> | The ID of the backup policy to associate with this volume. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.property.backupVaultId">BackupVaultId</a></code> | <code>string</code> | The ID of the backup vault to associate with this volume. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.property.policyEnabled">PolicyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to false, the backup policy will not be enabled on this volume, thus disabling scheduled backups. |

---

##### `BackupPolicyId`<sup>Required</sup> <a name="BackupPolicyId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.property.backupPolicyId"></a>

```csharp
public string BackupPolicyId { get; set; }
```

- *Type:* string

The ID of the backup policy to associate with this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#backup_policy_id NetappVolume#backup_policy_id}

---

##### `BackupVaultId`<sup>Required</sup> <a name="BackupVaultId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.property.backupVaultId"></a>

```csharp
public string BackupVaultId { get; set; }
```

- *Type:* string

The ID of the backup vault to associate with this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#backup_vault_id NetappVolume#backup_vault_id}

---

##### `PolicyEnabled`<sup>Optional</sup> <a name="PolicyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy.property.policyEnabled"></a>

```csharp
public bool|IResolvable PolicyEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to false, the backup policy will not be enabled on this volume, thus disabling scheduled backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#policy_enabled NetappVolume#policy_enabled}

---

### NetappVolumeDataProtectionReplication <a name="NetappVolumeDataProtectionReplication" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NetappVolumeDataProtectionReplication {
    string RemoteVolumeLocation,
    string RemoteVolumeResourceId,
    string ReplicationFrequency,
    string EndpointType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.remoteVolumeLocation">RemoteVolumeLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#remote_volume_location NetappVolume#remote_volume_location}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.remoteVolumeResourceId">RemoteVolumeResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#remote_volume_resource_id NetappVolume#remote_volume_resource_id}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.replicationFrequency">ReplicationFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#replication_frequency NetappVolume#replication_frequency}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.endpointType">EndpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#endpoint_type NetappVolume#endpoint_type}. |

---

##### `RemoteVolumeLocation`<sup>Required</sup> <a name="RemoteVolumeLocation" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.remoteVolumeLocation"></a>

```csharp
public string RemoteVolumeLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#remote_volume_location NetappVolume#remote_volume_location}.

---

##### `RemoteVolumeResourceId`<sup>Required</sup> <a name="RemoteVolumeResourceId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.remoteVolumeResourceId"></a>

```csharp
public string RemoteVolumeResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#remote_volume_resource_id NetappVolume#remote_volume_resource_id}.

---

##### `ReplicationFrequency`<sup>Required</sup> <a name="ReplicationFrequency" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.replicationFrequency"></a>

```csharp
public string ReplicationFrequency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#replication_frequency NetappVolume#replication_frequency}.

---

##### `EndpointType`<sup>Optional</sup> <a name="EndpointType" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication.property.endpointType"></a>

```csharp
public string EndpointType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#endpoint_type NetappVolume#endpoint_type}.

---

### NetappVolumeDataProtectionSnapshotPolicy <a name="NetappVolumeDataProtectionSnapshotPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NetappVolumeDataProtectionSnapshotPolicy {
    string SnapshotPolicyId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy.property.snapshotPolicyId">SnapshotPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#snapshot_policy_id NetappVolume#snapshot_policy_id}. |

---

##### `SnapshotPolicyId`<sup>Required</sup> <a name="SnapshotPolicyId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy.property.snapshotPolicyId"></a>

```csharp
public string SnapshotPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#snapshot_policy_id NetappVolume#snapshot_policy_id}.

---

### NetappVolumeExportPolicyRule <a name="NetappVolumeExportPolicyRule" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NetappVolumeExportPolicyRule {
    string[] AllowedClients,
    double RuleIndex,
    bool|IResolvable Kerberos5IReadOnlyEnabled = null,
    bool|IResolvable Kerberos5IReadWriteEnabled = null,
    bool|IResolvable Kerberos5PReadOnlyEnabled = null,
    bool|IResolvable Kerberos5PReadWriteEnabled = null,
    bool|IResolvable Kerberos5ReadOnlyEnabled = null,
    bool|IResolvable Kerberos5ReadWriteEnabled = null,
    string[] Protocol = null,
    string[] ProtocolsEnabled = null,
    bool|IResolvable RootAccessEnabled = null,
    bool|IResolvable UnixReadOnly = null,
    bool|IResolvable UnixReadWrite = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.allowedClients">AllowedClients</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#allowed_clients NetappVolume#allowed_clients}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.ruleIndex">RuleIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#rule_index NetappVolume#rule_index}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5IReadOnlyEnabled">Kerberos5IReadOnlyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#kerberos_5i_read_only_enabled NetappVolume#kerberos_5i_read_only_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5IReadWriteEnabled">Kerberos5IReadWriteEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#kerberos_5i_read_write_enabled NetappVolume#kerberos_5i_read_write_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5PReadOnlyEnabled">Kerberos5PReadOnlyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#kerberos_5p_read_only_enabled NetappVolume#kerberos_5p_read_only_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5PReadWriteEnabled">Kerberos5PReadWriteEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#kerberos_5p_read_write_enabled NetappVolume#kerberos_5p_read_write_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5ReadOnlyEnabled">Kerberos5ReadOnlyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#kerberos_5_read_only_enabled NetappVolume#kerberos_5_read_only_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5ReadWriteEnabled">Kerberos5ReadWriteEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#kerberos_5_read_write_enabled NetappVolume#kerberos_5_read_write_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.protocol">Protocol</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#protocol NetappVolume#protocol}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.protocolsEnabled">ProtocolsEnabled</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#protocols_enabled NetappVolume#protocols_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.rootAccessEnabled">RootAccessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#root_access_enabled NetappVolume#root_access_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.unixReadOnly">UnixReadOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#unix_read_only NetappVolume#unix_read_only}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.unixReadWrite">UnixReadWrite</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#unix_read_write NetappVolume#unix_read_write}. |

---

##### `AllowedClients`<sup>Required</sup> <a name="AllowedClients" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.allowedClients"></a>

```csharp
public string[] AllowedClients { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#allowed_clients NetappVolume#allowed_clients}.

---

##### `RuleIndex`<sup>Required</sup> <a name="RuleIndex" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.ruleIndex"></a>

```csharp
public double RuleIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#rule_index NetappVolume#rule_index}.

---

##### `Kerberos5IReadOnlyEnabled`<sup>Optional</sup> <a name="Kerberos5IReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5IReadOnlyEnabled"></a>

```csharp
public bool|IResolvable Kerberos5IReadOnlyEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#kerberos_5i_read_only_enabled NetappVolume#kerberos_5i_read_only_enabled}.

---

##### `Kerberos5IReadWriteEnabled`<sup>Optional</sup> <a name="Kerberos5IReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5IReadWriteEnabled"></a>

```csharp
public bool|IResolvable Kerberos5IReadWriteEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#kerberos_5i_read_write_enabled NetappVolume#kerberos_5i_read_write_enabled}.

---

##### `Kerberos5PReadOnlyEnabled`<sup>Optional</sup> <a name="Kerberos5PReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5PReadOnlyEnabled"></a>

```csharp
public bool|IResolvable Kerberos5PReadOnlyEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#kerberos_5p_read_only_enabled NetappVolume#kerberos_5p_read_only_enabled}.

---

##### `Kerberos5PReadWriteEnabled`<sup>Optional</sup> <a name="Kerberos5PReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5PReadWriteEnabled"></a>

```csharp
public bool|IResolvable Kerberos5PReadWriteEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#kerberos_5p_read_write_enabled NetappVolume#kerberos_5p_read_write_enabled}.

---

##### `Kerberos5ReadOnlyEnabled`<sup>Optional</sup> <a name="Kerberos5ReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5ReadOnlyEnabled"></a>

```csharp
public bool|IResolvable Kerberos5ReadOnlyEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#kerberos_5_read_only_enabled NetappVolume#kerberos_5_read_only_enabled}.

---

##### `Kerberos5ReadWriteEnabled`<sup>Optional</sup> <a name="Kerberos5ReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.kerberos5ReadWriteEnabled"></a>

```csharp
public bool|IResolvable Kerberos5ReadWriteEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#kerberos_5_read_write_enabled NetappVolume#kerberos_5_read_write_enabled}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.protocol"></a>

```csharp
public string[] Protocol { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#protocol NetappVolume#protocol}.

---

##### `ProtocolsEnabled`<sup>Optional</sup> <a name="ProtocolsEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.protocolsEnabled"></a>

```csharp
public string[] ProtocolsEnabled { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#protocols_enabled NetappVolume#protocols_enabled}.

---

##### `RootAccessEnabled`<sup>Optional</sup> <a name="RootAccessEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.rootAccessEnabled"></a>

```csharp
public bool|IResolvable RootAccessEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#root_access_enabled NetappVolume#root_access_enabled}.

---

##### `UnixReadOnly`<sup>Optional</sup> <a name="UnixReadOnly" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.unixReadOnly"></a>

```csharp
public bool|IResolvable UnixReadOnly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#unix_read_only NetappVolume#unix_read_only}.

---

##### `UnixReadWrite`<sup>Optional</sup> <a name="UnixReadWrite" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule.property.unixReadWrite"></a>

```csharp
public bool|IResolvable UnixReadWrite { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#unix_read_write NetappVolume#unix_read_write}.

---

### NetappVolumeTimeouts <a name="NetappVolumeTimeouts" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NetappVolumeTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#create NetappVolume#create}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#delete NetappVolume#delete}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#read NetappVolume#read}. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#update NetappVolume#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#create NetappVolume#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#delete NetappVolume#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#read NetappVolume#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/netapp_volume#update NetappVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeCoolAccessOutputReference <a name="NetappVolumeCoolAccessOutputReference" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NetappVolumeCoolAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.coolnessPeriodInDaysInput">CoolnessPeriodInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.retrievalPolicyInput">RetrievalPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.tieringPolicyInput">TieringPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.coolnessPeriodInDays">CoolnessPeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.retrievalPolicy">RetrievalPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.tieringPolicy">TieringPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess">NetappVolumeCoolAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CoolnessPeriodInDaysInput`<sup>Optional</sup> <a name="CoolnessPeriodInDaysInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.coolnessPeriodInDaysInput"></a>

```csharp
public double CoolnessPeriodInDaysInput { get; }
```

- *Type:* double

---

##### `RetrievalPolicyInput`<sup>Optional</sup> <a name="RetrievalPolicyInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.retrievalPolicyInput"></a>

```csharp
public string RetrievalPolicyInput { get; }
```

- *Type:* string

---

##### `TieringPolicyInput`<sup>Optional</sup> <a name="TieringPolicyInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.tieringPolicyInput"></a>

```csharp
public string TieringPolicyInput { get; }
```

- *Type:* string

---

##### `CoolnessPeriodInDays`<sup>Required</sup> <a name="CoolnessPeriodInDays" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.coolnessPeriodInDays"></a>

```csharp
public double CoolnessPeriodInDays { get; }
```

- *Type:* double

---

##### `RetrievalPolicy`<sup>Required</sup> <a name="RetrievalPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.retrievalPolicy"></a>

```csharp
public string RetrievalPolicy { get; }
```

- *Type:* string

---

##### `TieringPolicy`<sup>Required</sup> <a name="TieringPolicy" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.tieringPolicy"></a>

```csharp
public string TieringPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccessOutputReference.property.internalValue"></a>

```csharp
public NetappVolumeCoolAccess InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeCoolAccess">NetappVolumeCoolAccess</a>

---


### NetappVolumeDataProtectionAdvancedRansomwareOutputReference <a name="NetappVolumeDataProtectionAdvancedRansomwareOutputReference" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NetappVolumeDataProtectionAdvancedRansomwareOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.protectionEnabledInput">ProtectionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.protectionEnabled">ProtectionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware">NetappVolumeDataProtectionAdvancedRansomware</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProtectionEnabledInput`<sup>Optional</sup> <a name="ProtectionEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.protectionEnabledInput"></a>

```csharp
public bool|IResolvable ProtectionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProtectionEnabled`<sup>Required</sup> <a name="ProtectionEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.protectionEnabled"></a>

```csharp
public bool|IResolvable ProtectionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomwareOutputReference.property.internalValue"></a>

```csharp
public NetappVolumeDataProtectionAdvancedRansomware InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionAdvancedRansomware">NetappVolumeDataProtectionAdvancedRansomware</a>

---


### NetappVolumeDataProtectionBackupPolicyOutputReference <a name="NetappVolumeDataProtectionBackupPolicyOutputReference" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NetappVolumeDataProtectionBackupPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.resetPolicyEnabled">ResetPolicyEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPolicyEnabled` <a name="ResetPolicyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.resetPolicyEnabled"></a>

```csharp
private void ResetPolicyEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupPolicyIdInput">BackupPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupVaultIdInput">BackupVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.policyEnabledInput">PolicyEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupPolicyId">BackupPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupVaultId">BackupVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.policyEnabled">PolicyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupPolicyIdInput`<sup>Optional</sup> <a name="BackupPolicyIdInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupPolicyIdInput"></a>

```csharp
public string BackupPolicyIdInput { get; }
```

- *Type:* string

---

##### `BackupVaultIdInput`<sup>Optional</sup> <a name="BackupVaultIdInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupVaultIdInput"></a>

```csharp
public string BackupVaultIdInput { get; }
```

- *Type:* string

---

##### `PolicyEnabledInput`<sup>Optional</sup> <a name="PolicyEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.policyEnabledInput"></a>

```csharp
public bool|IResolvable PolicyEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BackupPolicyId`<sup>Required</sup> <a name="BackupPolicyId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupPolicyId"></a>

```csharp
public string BackupPolicyId { get; }
```

- *Type:* string

---

##### `BackupVaultId`<sup>Required</sup> <a name="BackupVaultId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.backupVaultId"></a>

```csharp
public string BackupVaultId { get; }
```

- *Type:* string

---

##### `PolicyEnabled`<sup>Required</sup> <a name="PolicyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.policyEnabled"></a>

```csharp
public bool|IResolvable PolicyEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicyOutputReference.property.internalValue"></a>

```csharp
public NetappVolumeDataProtectionBackupPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionBackupPolicy">NetappVolumeDataProtectionBackupPolicy</a>

---


### NetappVolumeDataProtectionReplicationOutputReference <a name="NetappVolumeDataProtectionReplicationOutputReference" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NetappVolumeDataProtectionReplicationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.resetEndpointType">ResetEndpointType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointType` <a name="ResetEndpointType" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.resetEndpointType"></a>

```csharp
private void ResetEndpointType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocationInput">RemoteVolumeLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceIdInput">RemoteVolumeResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.replicationFrequencyInput">ReplicationFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocation">RemoteVolumeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceId">RemoteVolumeResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.replicationFrequency">ReplicationFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.endpointTypeInput"></a>

```csharp
public string EndpointTypeInput { get; }
```

- *Type:* string

---

##### `RemoteVolumeLocationInput`<sup>Optional</sup> <a name="RemoteVolumeLocationInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocationInput"></a>

```csharp
public string RemoteVolumeLocationInput { get; }
```

- *Type:* string

---

##### `RemoteVolumeResourceIdInput`<sup>Optional</sup> <a name="RemoteVolumeResourceIdInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceIdInput"></a>

```csharp
public string RemoteVolumeResourceIdInput { get; }
```

- *Type:* string

---

##### `ReplicationFrequencyInput`<sup>Optional</sup> <a name="ReplicationFrequencyInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.replicationFrequencyInput"></a>

```csharp
public string ReplicationFrequencyInput { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `RemoteVolumeLocation`<sup>Required</sup> <a name="RemoteVolumeLocation" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocation"></a>

```csharp
public string RemoteVolumeLocation { get; }
```

- *Type:* string

---

##### `RemoteVolumeResourceId`<sup>Required</sup> <a name="RemoteVolumeResourceId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceId"></a>

```csharp
public string RemoteVolumeResourceId { get; }
```

- *Type:* string

---

##### `ReplicationFrequency`<sup>Required</sup> <a name="ReplicationFrequency" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.replicationFrequency"></a>

```csharp
public string ReplicationFrequency { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplicationOutputReference.property.internalValue"></a>

```csharp
public NetappVolumeDataProtectionReplication InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionReplication">NetappVolumeDataProtectionReplication</a>

---


### NetappVolumeDataProtectionSnapshotPolicyOutputReference <a name="NetappVolumeDataProtectionSnapshotPolicyOutputReference" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NetappVolumeDataProtectionSnapshotPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyIdInput">SnapshotPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyId">SnapshotPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SnapshotPolicyIdInput`<sup>Optional</sup> <a name="SnapshotPolicyIdInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyIdInput"></a>

```csharp
public string SnapshotPolicyIdInput { get; }
```

- *Type:* string

---

##### `SnapshotPolicyId`<sup>Required</sup> <a name="SnapshotPolicyId" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyId"></a>

```csharp
public string SnapshotPolicyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicyOutputReference.property.internalValue"></a>

```csharp
public NetappVolumeDataProtectionSnapshotPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeDataProtectionSnapshotPolicy">NetappVolumeDataProtectionSnapshotPolicy</a>

---


### NetappVolumeExportPolicyRuleList <a name="NetappVolumeExportPolicyRuleList" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NetappVolumeExportPolicyRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.get"></a>

```csharp
private NetappVolumeExportPolicyRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleList.property.internalValue"></a>

```csharp
public IResolvable|NetappVolumeExportPolicyRule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>[]

---


### NetappVolumeExportPolicyRuleOutputReference <a name="NetappVolumeExportPolicyRuleOutputReference" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NetappVolumeExportPolicyRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5IReadOnlyEnabled">ResetKerberos5IReadOnlyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5IReadWriteEnabled">ResetKerberos5IReadWriteEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5PReadOnlyEnabled">ResetKerberos5PReadOnlyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5PReadWriteEnabled">ResetKerberos5PReadWriteEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5ReadOnlyEnabled">ResetKerberos5ReadOnlyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5ReadWriteEnabled">ResetKerberos5ReadWriteEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetProtocolsEnabled">ResetProtocolsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetRootAccessEnabled">ResetRootAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetUnixReadOnly">ResetUnixReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetUnixReadWrite">ResetUnixReadWrite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKerberos5IReadOnlyEnabled` <a name="ResetKerberos5IReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5IReadOnlyEnabled"></a>

```csharp
private void ResetKerberos5IReadOnlyEnabled()
```

##### `ResetKerberos5IReadWriteEnabled` <a name="ResetKerberos5IReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5IReadWriteEnabled"></a>

```csharp
private void ResetKerberos5IReadWriteEnabled()
```

##### `ResetKerberos5PReadOnlyEnabled` <a name="ResetKerberos5PReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5PReadOnlyEnabled"></a>

```csharp
private void ResetKerberos5PReadOnlyEnabled()
```

##### `ResetKerberos5PReadWriteEnabled` <a name="ResetKerberos5PReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5PReadWriteEnabled"></a>

```csharp
private void ResetKerberos5PReadWriteEnabled()
```

##### `ResetKerberos5ReadOnlyEnabled` <a name="ResetKerberos5ReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5ReadOnlyEnabled"></a>

```csharp
private void ResetKerberos5ReadOnlyEnabled()
```

##### `ResetKerberos5ReadWriteEnabled` <a name="ResetKerberos5ReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetKerberos5ReadWriteEnabled"></a>

```csharp
private void ResetKerberos5ReadWriteEnabled()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetProtocolsEnabled` <a name="ResetProtocolsEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetProtocolsEnabled"></a>

```csharp
private void ResetProtocolsEnabled()
```

##### `ResetRootAccessEnabled` <a name="ResetRootAccessEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetRootAccessEnabled"></a>

```csharp
private void ResetRootAccessEnabled()
```

##### `ResetUnixReadOnly` <a name="ResetUnixReadOnly" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetUnixReadOnly"></a>

```csharp
private void ResetUnixReadOnly()
```

##### `ResetUnixReadWrite` <a name="ResetUnixReadWrite" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.resetUnixReadWrite"></a>

```csharp
private void ResetUnixReadWrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.allowedClientsInput">AllowedClientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadOnlyEnabledInput">Kerberos5IReadOnlyEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadWriteEnabledInput">Kerberos5IReadWriteEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadOnlyEnabledInput">Kerberos5PReadOnlyEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadWriteEnabledInput">Kerberos5PReadWriteEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadOnlyEnabledInput">Kerberos5ReadOnlyEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadWriteEnabledInput">Kerberos5ReadWriteEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.protocolsEnabledInput">ProtocolsEnabledInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.rootAccessEnabledInput">RootAccessEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.ruleIndexInput">RuleIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadOnlyInput">UnixReadOnlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadWriteInput">UnixReadWriteInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.allowedClients">AllowedClients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadOnlyEnabled">Kerberos5IReadOnlyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadWriteEnabled">Kerberos5IReadWriteEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadOnlyEnabled">Kerberos5PReadOnlyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadWriteEnabled">Kerberos5PReadWriteEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadOnlyEnabled">Kerberos5ReadOnlyEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadWriteEnabled">Kerberos5ReadWriteEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.protocol">Protocol</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.protocolsEnabled">ProtocolsEnabled</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.rootAccessEnabled">RootAccessEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.ruleIndex">RuleIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadOnly">UnixReadOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadWrite">UnixReadWrite</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedClientsInput`<sup>Optional</sup> <a name="AllowedClientsInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.allowedClientsInput"></a>

```csharp
public string[] AllowedClientsInput { get; }
```

- *Type:* string[]

---

##### `Kerberos5IReadOnlyEnabledInput`<sup>Optional</sup> <a name="Kerberos5IReadOnlyEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadOnlyEnabledInput"></a>

```csharp
public bool|IResolvable Kerberos5IReadOnlyEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Kerberos5IReadWriteEnabledInput`<sup>Optional</sup> <a name="Kerberos5IReadWriteEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadWriteEnabledInput"></a>

```csharp
public bool|IResolvable Kerberos5IReadWriteEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Kerberos5PReadOnlyEnabledInput`<sup>Optional</sup> <a name="Kerberos5PReadOnlyEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadOnlyEnabledInput"></a>

```csharp
public bool|IResolvable Kerberos5PReadOnlyEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Kerberos5PReadWriteEnabledInput`<sup>Optional</sup> <a name="Kerberos5PReadWriteEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadWriteEnabledInput"></a>

```csharp
public bool|IResolvable Kerberos5PReadWriteEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Kerberos5ReadOnlyEnabledInput`<sup>Optional</sup> <a name="Kerberos5ReadOnlyEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadOnlyEnabledInput"></a>

```csharp
public bool|IResolvable Kerberos5ReadOnlyEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Kerberos5ReadWriteEnabledInput`<sup>Optional</sup> <a name="Kerberos5ReadWriteEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadWriteEnabledInput"></a>

```csharp
public bool|IResolvable Kerberos5ReadWriteEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.protocolInput"></a>

```csharp
public string[] ProtocolInput { get; }
```

- *Type:* string[]

---

##### `ProtocolsEnabledInput`<sup>Optional</sup> <a name="ProtocolsEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.protocolsEnabledInput"></a>

```csharp
public string[] ProtocolsEnabledInput { get; }
```

- *Type:* string[]

---

##### `RootAccessEnabledInput`<sup>Optional</sup> <a name="RootAccessEnabledInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.rootAccessEnabledInput"></a>

```csharp
public bool|IResolvable RootAccessEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RuleIndexInput`<sup>Optional</sup> <a name="RuleIndexInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.ruleIndexInput"></a>

```csharp
public double RuleIndexInput { get; }
```

- *Type:* double

---

##### `UnixReadOnlyInput`<sup>Optional</sup> <a name="UnixReadOnlyInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadOnlyInput"></a>

```csharp
public bool|IResolvable UnixReadOnlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UnixReadWriteInput`<sup>Optional</sup> <a name="UnixReadWriteInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadWriteInput"></a>

```csharp
public bool|IResolvable UnixReadWriteInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowedClients`<sup>Required</sup> <a name="AllowedClients" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.allowedClients"></a>

```csharp
public string[] AllowedClients { get; }
```

- *Type:* string[]

---

##### `Kerberos5IReadOnlyEnabled`<sup>Required</sup> <a name="Kerberos5IReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadOnlyEnabled"></a>

```csharp
public bool|IResolvable Kerberos5IReadOnlyEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Kerberos5IReadWriteEnabled`<sup>Required</sup> <a name="Kerberos5IReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5IReadWriteEnabled"></a>

```csharp
public bool|IResolvable Kerberos5IReadWriteEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Kerberos5PReadOnlyEnabled`<sup>Required</sup> <a name="Kerberos5PReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadOnlyEnabled"></a>

```csharp
public bool|IResolvable Kerberos5PReadOnlyEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Kerberos5PReadWriteEnabled`<sup>Required</sup> <a name="Kerberos5PReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5PReadWriteEnabled"></a>

```csharp
public bool|IResolvable Kerberos5PReadWriteEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Kerberos5ReadOnlyEnabled`<sup>Required</sup> <a name="Kerberos5ReadOnlyEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadOnlyEnabled"></a>

```csharp
public bool|IResolvable Kerberos5ReadOnlyEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Kerberos5ReadWriteEnabled`<sup>Required</sup> <a name="Kerberos5ReadWriteEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.kerberos5ReadWriteEnabled"></a>

```csharp
public bool|IResolvable Kerberos5ReadWriteEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.protocol"></a>

```csharp
public string[] Protocol { get; }
```

- *Type:* string[]

---

##### `ProtocolsEnabled`<sup>Required</sup> <a name="ProtocolsEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.protocolsEnabled"></a>

```csharp
public string[] ProtocolsEnabled { get; }
```

- *Type:* string[]

---

##### `RootAccessEnabled`<sup>Required</sup> <a name="RootAccessEnabled" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.rootAccessEnabled"></a>

```csharp
public bool|IResolvable RootAccessEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RuleIndex`<sup>Required</sup> <a name="RuleIndex" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.ruleIndex"></a>

```csharp
public double RuleIndex { get; }
```

- *Type:* double

---

##### `UnixReadOnly`<sup>Required</sup> <a name="UnixReadOnly" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadOnly"></a>

```csharp
public bool|IResolvable UnixReadOnly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UnixReadWrite`<sup>Required</sup> <a name="UnixReadWrite" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.unixReadWrite"></a>

```csharp
public bool|IResolvable UnixReadWrite { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetappVolumeExportPolicyRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeExportPolicyRule">NetappVolumeExportPolicyRule</a>

---


### NetappVolumeTimeoutsOutputReference <a name="NetappVolumeTimeoutsOutputReference" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new NetappVolumeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetappVolumeTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.netappVolume.NetappVolumeTimeouts">NetappVolumeTimeouts</a>

---



