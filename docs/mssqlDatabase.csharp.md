# `mssqlDatabase` Submodule <a name="`mssqlDatabase` Submodule" id="@cdktn/provider-azurerm.mssqlDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlDatabase <a name="MssqlDatabase" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database azurerm_mssql_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MssqlDatabase(Construct Scope, string Id, MssqlDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig">MssqlDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig">MssqlDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.putImport">PutImport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.putLongTermRetentionPolicy">PutLongTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.putShortTermRetentionPolicy">PutShortTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.putThreatDetectionPolicy">PutThreatDetectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetAutoPauseDelayInMinutes">ResetAutoPauseDelayInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetCollation">ResetCollation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetCreateMode">ResetCreateMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetCreationSourceDatabaseId">ResetCreationSourceDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetElasticPoolId">ResetElasticPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetEnclaveType">ResetEnclaveType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetGeoBackupEnabled">ResetGeoBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetImport">ResetImport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetLedgerEnabled">ResetLedgerEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetLicenseType">ResetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetLongTermRetentionPolicy">ResetLongTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetMaintenanceConfigurationName">ResetMaintenanceConfigurationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetMaxSizeGb">ResetMaxSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetMinCapacity">ResetMinCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetReadReplicaCount">ResetReadReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetReadScale">ResetReadScale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRecoverDatabaseId">ResetRecoverDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRecoveryPointId">ResetRecoveryPointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRestoreDroppedDatabaseId">ResetRestoreDroppedDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRestoreLongTermRetentionBackupId">ResetRestoreLongTermRetentionBackupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRestorePointInTime">ResetRestorePointInTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetSampleName">ResetSampleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetSecondaryType">ResetSecondaryType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetShortTermRetentionPolicy">ResetShortTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetSkuName">ResetSkuName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetStorageAccountType">ResetStorageAccountType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetThreatDetectionPolicy">ResetThreatDetectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTransparentDataEncryptionEnabled">ResetTransparentDataEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTransparentDataEncryptionKeyAutomaticRotationEnabled">ResetTransparentDataEncryptionKeyAutomaticRotationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTransparentDataEncryptionKeyVaultKeyId">ResetTransparentDataEncryptionKeyVaultKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetZoneRedundant">ResetZoneRedundant</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.putIdentity"></a>

```csharp
private void PutIdentity(MssqlDatabaseIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity">MssqlDatabaseIdentity</a>

---

##### `PutImport` <a name="PutImport" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.putImport"></a>

```csharp
private void PutImport(MssqlDatabaseImport Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.putImport.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImport">MssqlDatabaseImport</a>

---

##### `PutLongTermRetentionPolicy` <a name="PutLongTermRetentionPolicy" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.putLongTermRetentionPolicy"></a>

```csharp
private void PutLongTermRetentionPolicy(MssqlDatabaseLongTermRetentionPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.putLongTermRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy">MssqlDatabaseLongTermRetentionPolicy</a>

---

##### `PutShortTermRetentionPolicy` <a name="PutShortTermRetentionPolicy" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.putShortTermRetentionPolicy"></a>

```csharp
private void PutShortTermRetentionPolicy(MssqlDatabaseShortTermRetentionPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.putShortTermRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy">MssqlDatabaseShortTermRetentionPolicy</a>

---

##### `PutThreatDetectionPolicy` <a name="PutThreatDetectionPolicy" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.putThreatDetectionPolicy"></a>

```csharp
private void PutThreatDetectionPolicy(MssqlDatabaseThreatDetectionPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.putThreatDetectionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy">MssqlDatabaseThreatDetectionPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.putTimeouts"></a>

```csharp
private void PutTimeouts(MssqlDatabaseTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts">MssqlDatabaseTimeouts</a>

---

##### `ResetAutoPauseDelayInMinutes` <a name="ResetAutoPauseDelayInMinutes" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetAutoPauseDelayInMinutes"></a>

```csharp
private void ResetAutoPauseDelayInMinutes()
```

##### `ResetCollation` <a name="ResetCollation" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetCollation"></a>

```csharp
private void ResetCollation()
```

##### `ResetCreateMode` <a name="ResetCreateMode" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetCreateMode"></a>

```csharp
private void ResetCreateMode()
```

##### `ResetCreationSourceDatabaseId` <a name="ResetCreationSourceDatabaseId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetCreationSourceDatabaseId"></a>

```csharp
private void ResetCreationSourceDatabaseId()
```

##### `ResetElasticPoolId` <a name="ResetElasticPoolId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetElasticPoolId"></a>

```csharp
private void ResetElasticPoolId()
```

##### `ResetEnclaveType` <a name="ResetEnclaveType" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetEnclaveType"></a>

```csharp
private void ResetEnclaveType()
```

##### `ResetGeoBackupEnabled` <a name="ResetGeoBackupEnabled" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetGeoBackupEnabled"></a>

```csharp
private void ResetGeoBackupEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetImport` <a name="ResetImport" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetImport"></a>

```csharp
private void ResetImport()
```

##### `ResetLedgerEnabled` <a name="ResetLedgerEnabled" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetLedgerEnabled"></a>

```csharp
private void ResetLedgerEnabled()
```

##### `ResetLicenseType` <a name="ResetLicenseType" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetLicenseType"></a>

```csharp
private void ResetLicenseType()
```

##### `ResetLongTermRetentionPolicy` <a name="ResetLongTermRetentionPolicy" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetLongTermRetentionPolicy"></a>

```csharp
private void ResetLongTermRetentionPolicy()
```

##### `ResetMaintenanceConfigurationName` <a name="ResetMaintenanceConfigurationName" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetMaintenanceConfigurationName"></a>

```csharp
private void ResetMaintenanceConfigurationName()
```

##### `ResetMaxSizeGb` <a name="ResetMaxSizeGb" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetMaxSizeGb"></a>

```csharp
private void ResetMaxSizeGb()
```

##### `ResetMinCapacity` <a name="ResetMinCapacity" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetMinCapacity"></a>

```csharp
private void ResetMinCapacity()
```

##### `ResetReadReplicaCount` <a name="ResetReadReplicaCount" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetReadReplicaCount"></a>

```csharp
private void ResetReadReplicaCount()
```

##### `ResetReadScale` <a name="ResetReadScale" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetReadScale"></a>

```csharp
private void ResetReadScale()
```

##### `ResetRecoverDatabaseId` <a name="ResetRecoverDatabaseId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRecoverDatabaseId"></a>

```csharp
private void ResetRecoverDatabaseId()
```

##### `ResetRecoveryPointId` <a name="ResetRecoveryPointId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRecoveryPointId"></a>

```csharp
private void ResetRecoveryPointId()
```

##### `ResetRestoreDroppedDatabaseId` <a name="ResetRestoreDroppedDatabaseId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRestoreDroppedDatabaseId"></a>

```csharp
private void ResetRestoreDroppedDatabaseId()
```

##### `ResetRestoreLongTermRetentionBackupId` <a name="ResetRestoreLongTermRetentionBackupId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRestoreLongTermRetentionBackupId"></a>

```csharp
private void ResetRestoreLongTermRetentionBackupId()
```

##### `ResetRestorePointInTime` <a name="ResetRestorePointInTime" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetRestorePointInTime"></a>

```csharp
private void ResetRestorePointInTime()
```

##### `ResetSampleName` <a name="ResetSampleName" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetSampleName"></a>

```csharp
private void ResetSampleName()
```

##### `ResetSecondaryType` <a name="ResetSecondaryType" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetSecondaryType"></a>

```csharp
private void ResetSecondaryType()
```

##### `ResetShortTermRetentionPolicy` <a name="ResetShortTermRetentionPolicy" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetShortTermRetentionPolicy"></a>

```csharp
private void ResetShortTermRetentionPolicy()
```

##### `ResetSkuName` <a name="ResetSkuName" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetSkuName"></a>

```csharp
private void ResetSkuName()
```

##### `ResetStorageAccountType` <a name="ResetStorageAccountType" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetStorageAccountType"></a>

```csharp
private void ResetStorageAccountType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetThreatDetectionPolicy` <a name="ResetThreatDetectionPolicy" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetThreatDetectionPolicy"></a>

```csharp
private void ResetThreatDetectionPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTransparentDataEncryptionEnabled` <a name="ResetTransparentDataEncryptionEnabled" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTransparentDataEncryptionEnabled"></a>

```csharp
private void ResetTransparentDataEncryptionEnabled()
```

##### `ResetTransparentDataEncryptionKeyAutomaticRotationEnabled` <a name="ResetTransparentDataEncryptionKeyAutomaticRotationEnabled" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTransparentDataEncryptionKeyAutomaticRotationEnabled"></a>

```csharp
private void ResetTransparentDataEncryptionKeyAutomaticRotationEnabled()
```

##### `ResetTransparentDataEncryptionKeyVaultKeyId` <a name="ResetTransparentDataEncryptionKeyVaultKeyId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetTransparentDataEncryptionKeyVaultKeyId"></a>

```csharp
private void ResetTransparentDataEncryptionKeyVaultKeyId()
```

##### `ResetZoneRedundant` <a name="ResetZoneRedundant" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.resetZoneRedundant"></a>

```csharp
private void ResetZoneRedundant()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MssqlDatabase resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

MssqlDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

MssqlDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

MssqlDatabase.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

MssqlDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MssqlDatabase resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MssqlDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MssqlDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MssqlDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference">MssqlDatabaseIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.import">Import</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference">MssqlDatabaseImportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.longTermRetentionPolicy">LongTermRetentionPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference">MssqlDatabaseLongTermRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.shortTermRetentionPolicy">ShortTermRetentionPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference">MssqlDatabaseShortTermRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.threatDetectionPolicy">ThreatDetectionPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference">MssqlDatabaseThreatDetectionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference">MssqlDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.autoPauseDelayInMinutesInput">AutoPauseDelayInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.collationInput">CollationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.createModeInput">CreateModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.creationSourceDatabaseIdInput">CreationSourceDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.elasticPoolIdInput">ElasticPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.enclaveTypeInput">EnclaveTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.geoBackupEnabledInput">GeoBackupEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity">MssqlDatabaseIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.importInput">ImportInput</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImport">MssqlDatabaseImport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.ledgerEnabledInput">LedgerEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.longTermRetentionPolicyInput">LongTermRetentionPolicyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy">MssqlDatabaseLongTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.maintenanceConfigurationNameInput">MaintenanceConfigurationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.maxSizeGbInput">MaxSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.minCapacityInput">MinCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.readReplicaCountInput">ReadReplicaCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.readScaleInput">ReadScaleInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.recoverDatabaseIdInput">RecoverDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.recoveryPointIdInput">RecoveryPointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restoreDroppedDatabaseIdInput">RestoreDroppedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restoreLongTermRetentionBackupIdInput">RestoreLongTermRetentionBackupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restorePointInTimeInput">RestorePointInTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.sampleNameInput">SampleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.secondaryTypeInput">SecondaryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.serverIdInput">ServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.shortTermRetentionPolicyInput">ShortTermRetentionPolicyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy">MssqlDatabaseShortTermRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.skuNameInput">SkuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.storageAccountTypeInput">StorageAccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.threatDetectionPolicyInput">ThreatDetectionPolicyInput</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy">MssqlDatabaseThreatDetectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts">MssqlDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionEnabledInput">TransparentDataEncryptionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionKeyAutomaticRotationEnabledInput">TransparentDataEncryptionKeyAutomaticRotationEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionKeyVaultKeyIdInput">TransparentDataEncryptionKeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.zoneRedundantInput">ZoneRedundantInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.autoPauseDelayInMinutes">AutoPauseDelayInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.collation">Collation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.createMode">CreateMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.creationSourceDatabaseId">CreationSourceDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.elasticPoolId">ElasticPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.enclaveType">EnclaveType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.geoBackupEnabled">GeoBackupEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.ledgerEnabled">LedgerEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.licenseType">LicenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.maintenanceConfigurationName">MaintenanceConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.maxSizeGb">MaxSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.minCapacity">MinCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.readReplicaCount">ReadReplicaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.readScale">ReadScale</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.recoverDatabaseId">RecoverDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.recoveryPointId">RecoveryPointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restoreDroppedDatabaseId">RestoreDroppedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restoreLongTermRetentionBackupId">RestoreLongTermRetentionBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restorePointInTime">RestorePointInTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.sampleName">SampleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.secondaryType">SecondaryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.serverId">ServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.skuName">SkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.storageAccountType">StorageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionEnabled">TransparentDataEncryptionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionKeyAutomaticRotationEnabled">TransparentDataEncryptionKeyAutomaticRotationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionKeyVaultKeyId">TransparentDataEncryptionKeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.zoneRedundant">ZoneRedundant</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.identity"></a>

```csharp
public MssqlDatabaseIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference">MssqlDatabaseIdentityOutputReference</a>

---

##### `Import`<sup>Required</sup> <a name="Import" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.import"></a>

```csharp
public MssqlDatabaseImportOutputReference Import { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference">MssqlDatabaseImportOutputReference</a>

---

##### `LongTermRetentionPolicy`<sup>Required</sup> <a name="LongTermRetentionPolicy" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.longTermRetentionPolicy"></a>

```csharp
public MssqlDatabaseLongTermRetentionPolicyOutputReference LongTermRetentionPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference">MssqlDatabaseLongTermRetentionPolicyOutputReference</a>

---

##### `ShortTermRetentionPolicy`<sup>Required</sup> <a name="ShortTermRetentionPolicy" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.shortTermRetentionPolicy"></a>

```csharp
public MssqlDatabaseShortTermRetentionPolicyOutputReference ShortTermRetentionPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference">MssqlDatabaseShortTermRetentionPolicyOutputReference</a>

---

##### `ThreatDetectionPolicy`<sup>Required</sup> <a name="ThreatDetectionPolicy" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.threatDetectionPolicy"></a>

```csharp
public MssqlDatabaseThreatDetectionPolicyOutputReference ThreatDetectionPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference">MssqlDatabaseThreatDetectionPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.timeouts"></a>

```csharp
public MssqlDatabaseTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference">MssqlDatabaseTimeoutsOutputReference</a>

---

##### `AutoPauseDelayInMinutesInput`<sup>Optional</sup> <a name="AutoPauseDelayInMinutesInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.autoPauseDelayInMinutesInput"></a>

```csharp
public double AutoPauseDelayInMinutesInput { get; }
```

- *Type:* double

---

##### `CollationInput`<sup>Optional</sup> <a name="CollationInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.collationInput"></a>

```csharp
public string CollationInput { get; }
```

- *Type:* string

---

##### `CreateModeInput`<sup>Optional</sup> <a name="CreateModeInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.createModeInput"></a>

```csharp
public string CreateModeInput { get; }
```

- *Type:* string

---

##### `CreationSourceDatabaseIdInput`<sup>Optional</sup> <a name="CreationSourceDatabaseIdInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.creationSourceDatabaseIdInput"></a>

```csharp
public string CreationSourceDatabaseIdInput { get; }
```

- *Type:* string

---

##### `ElasticPoolIdInput`<sup>Optional</sup> <a name="ElasticPoolIdInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.elasticPoolIdInput"></a>

```csharp
public string ElasticPoolIdInput { get; }
```

- *Type:* string

---

##### `EnclaveTypeInput`<sup>Optional</sup> <a name="EnclaveTypeInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.enclaveTypeInput"></a>

```csharp
public string EnclaveTypeInput { get; }
```

- *Type:* string

---

##### `GeoBackupEnabledInput`<sup>Optional</sup> <a name="GeoBackupEnabledInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.geoBackupEnabledInput"></a>

```csharp
public bool|IResolvable GeoBackupEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.identityInput"></a>

```csharp
public MssqlDatabaseIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity">MssqlDatabaseIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImportInput`<sup>Optional</sup> <a name="ImportInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.importInput"></a>

```csharp
public MssqlDatabaseImport ImportInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImport">MssqlDatabaseImport</a>

---

##### `LedgerEnabledInput`<sup>Optional</sup> <a name="LedgerEnabledInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.ledgerEnabledInput"></a>

```csharp
public bool|IResolvable LedgerEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.licenseTypeInput"></a>

```csharp
public string LicenseTypeInput { get; }
```

- *Type:* string

---

##### `LongTermRetentionPolicyInput`<sup>Optional</sup> <a name="LongTermRetentionPolicyInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.longTermRetentionPolicyInput"></a>

```csharp
public MssqlDatabaseLongTermRetentionPolicy LongTermRetentionPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy">MssqlDatabaseLongTermRetentionPolicy</a>

---

##### `MaintenanceConfigurationNameInput`<sup>Optional</sup> <a name="MaintenanceConfigurationNameInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.maintenanceConfigurationNameInput"></a>

```csharp
public string MaintenanceConfigurationNameInput { get; }
```

- *Type:* string

---

##### `MaxSizeGbInput`<sup>Optional</sup> <a name="MaxSizeGbInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.maxSizeGbInput"></a>

```csharp
public double MaxSizeGbInput { get; }
```

- *Type:* double

---

##### `MinCapacityInput`<sup>Optional</sup> <a name="MinCapacityInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.minCapacityInput"></a>

```csharp
public double MinCapacityInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReadReplicaCountInput`<sup>Optional</sup> <a name="ReadReplicaCountInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.readReplicaCountInput"></a>

```csharp
public double ReadReplicaCountInput { get; }
```

- *Type:* double

---

##### `ReadScaleInput`<sup>Optional</sup> <a name="ReadScaleInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.readScaleInput"></a>

```csharp
public bool|IResolvable ReadScaleInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RecoverDatabaseIdInput`<sup>Optional</sup> <a name="RecoverDatabaseIdInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.recoverDatabaseIdInput"></a>

```csharp
public string RecoverDatabaseIdInput { get; }
```

- *Type:* string

---

##### `RecoveryPointIdInput`<sup>Optional</sup> <a name="RecoveryPointIdInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.recoveryPointIdInput"></a>

```csharp
public string RecoveryPointIdInput { get; }
```

- *Type:* string

---

##### `RestoreDroppedDatabaseIdInput`<sup>Optional</sup> <a name="RestoreDroppedDatabaseIdInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restoreDroppedDatabaseIdInput"></a>

```csharp
public string RestoreDroppedDatabaseIdInput { get; }
```

- *Type:* string

---

##### `RestoreLongTermRetentionBackupIdInput`<sup>Optional</sup> <a name="RestoreLongTermRetentionBackupIdInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restoreLongTermRetentionBackupIdInput"></a>

```csharp
public string RestoreLongTermRetentionBackupIdInput { get; }
```

- *Type:* string

---

##### `RestorePointInTimeInput`<sup>Optional</sup> <a name="RestorePointInTimeInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restorePointInTimeInput"></a>

```csharp
public string RestorePointInTimeInput { get; }
```

- *Type:* string

---

##### `SampleNameInput`<sup>Optional</sup> <a name="SampleNameInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.sampleNameInput"></a>

```csharp
public string SampleNameInput { get; }
```

- *Type:* string

---

##### `SecondaryTypeInput`<sup>Optional</sup> <a name="SecondaryTypeInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.secondaryTypeInput"></a>

```csharp
public string SecondaryTypeInput { get; }
```

- *Type:* string

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.serverIdInput"></a>

```csharp
public string ServerIdInput { get; }
```

- *Type:* string

---

##### `ShortTermRetentionPolicyInput`<sup>Optional</sup> <a name="ShortTermRetentionPolicyInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.shortTermRetentionPolicyInput"></a>

```csharp
public MssqlDatabaseShortTermRetentionPolicy ShortTermRetentionPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy">MssqlDatabaseShortTermRetentionPolicy</a>

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.skuNameInput"></a>

```csharp
public string SkuNameInput { get; }
```

- *Type:* string

---

##### `StorageAccountTypeInput`<sup>Optional</sup> <a name="StorageAccountTypeInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.storageAccountTypeInput"></a>

```csharp
public string StorageAccountTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThreatDetectionPolicyInput`<sup>Optional</sup> <a name="ThreatDetectionPolicyInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.threatDetectionPolicyInput"></a>

```csharp
public MssqlDatabaseThreatDetectionPolicy ThreatDetectionPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy">MssqlDatabaseThreatDetectionPolicy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.timeoutsInput"></a>

```csharp
public IResolvable|MssqlDatabaseTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts">MssqlDatabaseTimeouts</a>

---

##### `TransparentDataEncryptionEnabledInput`<sup>Optional</sup> <a name="TransparentDataEncryptionEnabledInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionEnabledInput"></a>

```csharp
public bool|IResolvable TransparentDataEncryptionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TransparentDataEncryptionKeyAutomaticRotationEnabledInput`<sup>Optional</sup> <a name="TransparentDataEncryptionKeyAutomaticRotationEnabledInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionKeyAutomaticRotationEnabledInput"></a>

```csharp
public bool|IResolvable TransparentDataEncryptionKeyAutomaticRotationEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TransparentDataEncryptionKeyVaultKeyIdInput`<sup>Optional</sup> <a name="TransparentDataEncryptionKeyVaultKeyIdInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionKeyVaultKeyIdInput"></a>

```csharp
public string TransparentDataEncryptionKeyVaultKeyIdInput { get; }
```

- *Type:* string

---

##### `ZoneRedundantInput`<sup>Optional</sup> <a name="ZoneRedundantInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.zoneRedundantInput"></a>

```csharp
public bool|IResolvable ZoneRedundantInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutoPauseDelayInMinutes`<sup>Required</sup> <a name="AutoPauseDelayInMinutes" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.autoPauseDelayInMinutes"></a>

```csharp
public double AutoPauseDelayInMinutes { get; }
```

- *Type:* double

---

##### `Collation`<sup>Required</sup> <a name="Collation" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.collation"></a>

```csharp
public string Collation { get; }
```

- *Type:* string

---

##### `CreateMode`<sup>Required</sup> <a name="CreateMode" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.createMode"></a>

```csharp
public string CreateMode { get; }
```

- *Type:* string

---

##### `CreationSourceDatabaseId`<sup>Required</sup> <a name="CreationSourceDatabaseId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.creationSourceDatabaseId"></a>

```csharp
public string CreationSourceDatabaseId { get; }
```

- *Type:* string

---

##### `ElasticPoolId`<sup>Required</sup> <a name="ElasticPoolId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.elasticPoolId"></a>

```csharp
public string ElasticPoolId { get; }
```

- *Type:* string

---

##### `EnclaveType`<sup>Required</sup> <a name="EnclaveType" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.enclaveType"></a>

```csharp
public string EnclaveType { get; }
```

- *Type:* string

---

##### `GeoBackupEnabled`<sup>Required</sup> <a name="GeoBackupEnabled" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.geoBackupEnabled"></a>

```csharp
public bool|IResolvable GeoBackupEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LedgerEnabled`<sup>Required</sup> <a name="LedgerEnabled" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.ledgerEnabled"></a>

```csharp
public bool|IResolvable LedgerEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.licenseType"></a>

```csharp
public string LicenseType { get; }
```

- *Type:* string

---

##### `MaintenanceConfigurationName`<sup>Required</sup> <a name="MaintenanceConfigurationName" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.maintenanceConfigurationName"></a>

```csharp
public string MaintenanceConfigurationName { get; }
```

- *Type:* string

---

##### `MaxSizeGb`<sup>Required</sup> <a name="MaxSizeGb" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.maxSizeGb"></a>

```csharp
public double MaxSizeGb { get; }
```

- *Type:* double

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.minCapacity"></a>

```csharp
public double MinCapacity { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReadReplicaCount`<sup>Required</sup> <a name="ReadReplicaCount" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.readReplicaCount"></a>

```csharp
public double ReadReplicaCount { get; }
```

- *Type:* double

---

##### `ReadScale`<sup>Required</sup> <a name="ReadScale" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.readScale"></a>

```csharp
public bool|IResolvable ReadScale { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RecoverDatabaseId`<sup>Required</sup> <a name="RecoverDatabaseId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.recoverDatabaseId"></a>

```csharp
public string RecoverDatabaseId { get; }
```

- *Type:* string

---

##### `RecoveryPointId`<sup>Required</sup> <a name="RecoveryPointId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.recoveryPointId"></a>

```csharp
public string RecoveryPointId { get; }
```

- *Type:* string

---

##### `RestoreDroppedDatabaseId`<sup>Required</sup> <a name="RestoreDroppedDatabaseId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restoreDroppedDatabaseId"></a>

```csharp
public string RestoreDroppedDatabaseId { get; }
```

- *Type:* string

---

##### `RestoreLongTermRetentionBackupId`<sup>Required</sup> <a name="RestoreLongTermRetentionBackupId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restoreLongTermRetentionBackupId"></a>

```csharp
public string RestoreLongTermRetentionBackupId { get; }
```

- *Type:* string

---

##### `RestorePointInTime`<sup>Required</sup> <a name="RestorePointInTime" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.restorePointInTime"></a>

```csharp
public string RestorePointInTime { get; }
```

- *Type:* string

---

##### `SampleName`<sup>Required</sup> <a name="SampleName" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.sampleName"></a>

```csharp
public string SampleName { get; }
```

- *Type:* string

---

##### `SecondaryType`<sup>Required</sup> <a name="SecondaryType" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.secondaryType"></a>

```csharp
public string SecondaryType { get; }
```

- *Type:* string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.serverId"></a>

```csharp
public string ServerId { get; }
```

- *Type:* string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.skuName"></a>

```csharp
public string SkuName { get; }
```

- *Type:* string

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.storageAccountType"></a>

```csharp
public string StorageAccountType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TransparentDataEncryptionEnabled`<sup>Required</sup> <a name="TransparentDataEncryptionEnabled" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionEnabled"></a>

```csharp
public bool|IResolvable TransparentDataEncryptionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TransparentDataEncryptionKeyAutomaticRotationEnabled`<sup>Required</sup> <a name="TransparentDataEncryptionKeyAutomaticRotationEnabled" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionKeyAutomaticRotationEnabled"></a>

```csharp
public bool|IResolvable TransparentDataEncryptionKeyAutomaticRotationEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TransparentDataEncryptionKeyVaultKeyId`<sup>Required</sup> <a name="TransparentDataEncryptionKeyVaultKeyId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.transparentDataEncryptionKeyVaultKeyId"></a>

```csharp
public string TransparentDataEncryptionKeyVaultKeyId { get; }
```

- *Type:* string

---

##### `ZoneRedundant`<sup>Required</sup> <a name="ZoneRedundant" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.zoneRedundant"></a>

```csharp
public bool|IResolvable ZoneRedundant { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlDatabaseConfig <a name="MssqlDatabaseConfig" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MssqlDatabaseConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string ServerId,
    double AutoPauseDelayInMinutes = null,
    string Collation = null,
    string CreateMode = null,
    string CreationSourceDatabaseId = null,
    string ElasticPoolId = null,
    string EnclaveType = null,
    bool|IResolvable GeoBackupEnabled = null,
    string Id = null,
    MssqlDatabaseIdentity Identity = null,
    MssqlDatabaseImport Import = null,
    bool|IResolvable LedgerEnabled = null,
    string LicenseType = null,
    MssqlDatabaseLongTermRetentionPolicy LongTermRetentionPolicy = null,
    string MaintenanceConfigurationName = null,
    double MaxSizeGb = null,
    double MinCapacity = null,
    double ReadReplicaCount = null,
    bool|IResolvable ReadScale = null,
    string RecoverDatabaseId = null,
    string RecoveryPointId = null,
    string RestoreDroppedDatabaseId = null,
    string RestoreLongTermRetentionBackupId = null,
    string RestorePointInTime = null,
    string SampleName = null,
    string SecondaryType = null,
    MssqlDatabaseShortTermRetentionPolicy ShortTermRetentionPolicy = null,
    string SkuName = null,
    string StorageAccountType = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    MssqlDatabaseThreatDetectionPolicy ThreatDetectionPolicy = null,
    MssqlDatabaseTimeouts Timeouts = null,
    bool|IResolvable TransparentDataEncryptionEnabled = null,
    bool|IResolvable TransparentDataEncryptionKeyAutomaticRotationEnabled = null,
    string TransparentDataEncryptionKeyVaultKeyId = null,
    bool|IResolvable ZoneRedundant = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#name MssqlDatabase#name}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.serverId">ServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#server_id MssqlDatabase#server_id}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.autoPauseDelayInMinutes">AutoPauseDelayInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#auto_pause_delay_in_minutes MssqlDatabase#auto_pause_delay_in_minutes}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.collation">Collation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#collation MssqlDatabase#collation}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.createMode">CreateMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#create_mode MssqlDatabase#create_mode}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.creationSourceDatabaseId">CreationSourceDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#creation_source_database_id MssqlDatabase#creation_source_database_id}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.elasticPoolId">ElasticPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#elastic_pool_id MssqlDatabase#elastic_pool_id}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.enclaveType">EnclaveType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#enclave_type MssqlDatabase#enclave_type}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.geoBackupEnabled">GeoBackupEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#geo_backup_enabled MssqlDatabase#geo_backup_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#id MssqlDatabase#id}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.identity">Identity</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity">MssqlDatabaseIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.import">Import</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImport">MssqlDatabaseImport</a></code> | import block. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.ledgerEnabled">LedgerEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#ledger_enabled MssqlDatabase#ledger_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.licenseType">LicenseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#license_type MssqlDatabase#license_type}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.longTermRetentionPolicy">LongTermRetentionPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy">MssqlDatabaseLongTermRetentionPolicy</a></code> | long_term_retention_policy block. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.maintenanceConfigurationName">MaintenanceConfigurationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#maintenance_configuration_name MssqlDatabase#maintenance_configuration_name}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.maxSizeGb">MaxSizeGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#max_size_gb MssqlDatabase#max_size_gb}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.minCapacity">MinCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#min_capacity MssqlDatabase#min_capacity}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.readReplicaCount">ReadReplicaCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#read_replica_count MssqlDatabase#read_replica_count}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.readScale">ReadScale</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#read_scale MssqlDatabase#read_scale}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.recoverDatabaseId">RecoverDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#recover_database_id MssqlDatabase#recover_database_id}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.recoveryPointId">RecoveryPointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#recovery_point_id MssqlDatabase#recovery_point_id}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.restoreDroppedDatabaseId">RestoreDroppedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#restore_dropped_database_id MssqlDatabase#restore_dropped_database_id}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.restoreLongTermRetentionBackupId">RestoreLongTermRetentionBackupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#restore_long_term_retention_backup_id MssqlDatabase#restore_long_term_retention_backup_id}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.restorePointInTime">RestorePointInTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#restore_point_in_time MssqlDatabase#restore_point_in_time}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.sampleName">SampleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#sample_name MssqlDatabase#sample_name}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.secondaryType">SecondaryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#secondary_type MssqlDatabase#secondary_type}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.shortTermRetentionPolicy">ShortTermRetentionPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy">MssqlDatabaseShortTermRetentionPolicy</a></code> | short_term_retention_policy block. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.skuName">SkuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#sku_name MssqlDatabase#sku_name}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.storageAccountType">StorageAccountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#storage_account_type MssqlDatabase#storage_account_type}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#tags MssqlDatabase#tags}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.threatDetectionPolicy">ThreatDetectionPolicy</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy">MssqlDatabaseThreatDetectionPolicy</a></code> | threat_detection_policy block. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts">MssqlDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.transparentDataEncryptionEnabled">TransparentDataEncryptionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#transparent_data_encryption_enabled MssqlDatabase#transparent_data_encryption_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.transparentDataEncryptionKeyAutomaticRotationEnabled">TransparentDataEncryptionKeyAutomaticRotationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#transparent_data_encryption_key_automatic_rotation_enabled MssqlDatabase#transparent_data_encryption_key_automatic_rotation_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.transparentDataEncryptionKeyVaultKeyId">TransparentDataEncryptionKeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#transparent_data_encryption_key_vault_key_id MssqlDatabase#transparent_data_encryption_key_vault_key_id}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.zoneRedundant">ZoneRedundant</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#zone_redundant MssqlDatabase#zone_redundant}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#name MssqlDatabase#name}.

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.serverId"></a>

```csharp
public string ServerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#server_id MssqlDatabase#server_id}.

---

##### `AutoPauseDelayInMinutes`<sup>Optional</sup> <a name="AutoPauseDelayInMinutes" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.autoPauseDelayInMinutes"></a>

```csharp
public double AutoPauseDelayInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#auto_pause_delay_in_minutes MssqlDatabase#auto_pause_delay_in_minutes}.

---

##### `Collation`<sup>Optional</sup> <a name="Collation" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.collation"></a>

```csharp
public string Collation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#collation MssqlDatabase#collation}.

---

##### `CreateMode`<sup>Optional</sup> <a name="CreateMode" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.createMode"></a>

```csharp
public string CreateMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#create_mode MssqlDatabase#create_mode}.

---

##### `CreationSourceDatabaseId`<sup>Optional</sup> <a name="CreationSourceDatabaseId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.creationSourceDatabaseId"></a>

```csharp
public string CreationSourceDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#creation_source_database_id MssqlDatabase#creation_source_database_id}.

---

##### `ElasticPoolId`<sup>Optional</sup> <a name="ElasticPoolId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.elasticPoolId"></a>

```csharp
public string ElasticPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#elastic_pool_id MssqlDatabase#elastic_pool_id}.

---

##### `EnclaveType`<sup>Optional</sup> <a name="EnclaveType" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.enclaveType"></a>

```csharp
public string EnclaveType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#enclave_type MssqlDatabase#enclave_type}.

---

##### `GeoBackupEnabled`<sup>Optional</sup> <a name="GeoBackupEnabled" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.geoBackupEnabled"></a>

```csharp
public bool|IResolvable GeoBackupEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#geo_backup_enabled MssqlDatabase#geo_backup_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#id MssqlDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.identity"></a>

```csharp
public MssqlDatabaseIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity">MssqlDatabaseIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#identity MssqlDatabase#identity}

---

##### `Import`<sup>Optional</sup> <a name="Import" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.import"></a>

```csharp
public MssqlDatabaseImport Import { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImport">MssqlDatabaseImport</a>

import block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#import MssqlDatabase#import}

---

##### `LedgerEnabled`<sup>Optional</sup> <a name="LedgerEnabled" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.ledgerEnabled"></a>

```csharp
public bool|IResolvable LedgerEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#ledger_enabled MssqlDatabase#ledger_enabled}.

---

##### `LicenseType`<sup>Optional</sup> <a name="LicenseType" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.licenseType"></a>

```csharp
public string LicenseType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#license_type MssqlDatabase#license_type}.

---

##### `LongTermRetentionPolicy`<sup>Optional</sup> <a name="LongTermRetentionPolicy" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.longTermRetentionPolicy"></a>

```csharp
public MssqlDatabaseLongTermRetentionPolicy LongTermRetentionPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy">MssqlDatabaseLongTermRetentionPolicy</a>

long_term_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#long_term_retention_policy MssqlDatabase#long_term_retention_policy}

---

##### `MaintenanceConfigurationName`<sup>Optional</sup> <a name="MaintenanceConfigurationName" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.maintenanceConfigurationName"></a>

```csharp
public string MaintenanceConfigurationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#maintenance_configuration_name MssqlDatabase#maintenance_configuration_name}.

---

##### `MaxSizeGb`<sup>Optional</sup> <a name="MaxSizeGb" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.maxSizeGb"></a>

```csharp
public double MaxSizeGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#max_size_gb MssqlDatabase#max_size_gb}.

---

##### `MinCapacity`<sup>Optional</sup> <a name="MinCapacity" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.minCapacity"></a>

```csharp
public double MinCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#min_capacity MssqlDatabase#min_capacity}.

---

##### `ReadReplicaCount`<sup>Optional</sup> <a name="ReadReplicaCount" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.readReplicaCount"></a>

```csharp
public double ReadReplicaCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#read_replica_count MssqlDatabase#read_replica_count}.

---

##### `ReadScale`<sup>Optional</sup> <a name="ReadScale" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.readScale"></a>

```csharp
public bool|IResolvable ReadScale { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#read_scale MssqlDatabase#read_scale}.

---

##### `RecoverDatabaseId`<sup>Optional</sup> <a name="RecoverDatabaseId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.recoverDatabaseId"></a>

```csharp
public string RecoverDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#recover_database_id MssqlDatabase#recover_database_id}.

---

##### `RecoveryPointId`<sup>Optional</sup> <a name="RecoveryPointId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.recoveryPointId"></a>

```csharp
public string RecoveryPointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#recovery_point_id MssqlDatabase#recovery_point_id}.

---

##### `RestoreDroppedDatabaseId`<sup>Optional</sup> <a name="RestoreDroppedDatabaseId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.restoreDroppedDatabaseId"></a>

```csharp
public string RestoreDroppedDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#restore_dropped_database_id MssqlDatabase#restore_dropped_database_id}.

---

##### `RestoreLongTermRetentionBackupId`<sup>Optional</sup> <a name="RestoreLongTermRetentionBackupId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.restoreLongTermRetentionBackupId"></a>

```csharp
public string RestoreLongTermRetentionBackupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#restore_long_term_retention_backup_id MssqlDatabase#restore_long_term_retention_backup_id}.

---

##### `RestorePointInTime`<sup>Optional</sup> <a name="RestorePointInTime" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.restorePointInTime"></a>

```csharp
public string RestorePointInTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#restore_point_in_time MssqlDatabase#restore_point_in_time}.

---

##### `SampleName`<sup>Optional</sup> <a name="SampleName" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.sampleName"></a>

```csharp
public string SampleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#sample_name MssqlDatabase#sample_name}.

---

##### `SecondaryType`<sup>Optional</sup> <a name="SecondaryType" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.secondaryType"></a>

```csharp
public string SecondaryType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#secondary_type MssqlDatabase#secondary_type}.

---

##### `ShortTermRetentionPolicy`<sup>Optional</sup> <a name="ShortTermRetentionPolicy" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.shortTermRetentionPolicy"></a>

```csharp
public MssqlDatabaseShortTermRetentionPolicy ShortTermRetentionPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy">MssqlDatabaseShortTermRetentionPolicy</a>

short_term_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#short_term_retention_policy MssqlDatabase#short_term_retention_policy}

---

##### `SkuName`<sup>Optional</sup> <a name="SkuName" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.skuName"></a>

```csharp
public string SkuName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#sku_name MssqlDatabase#sku_name}.

---

##### `StorageAccountType`<sup>Optional</sup> <a name="StorageAccountType" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.storageAccountType"></a>

```csharp
public string StorageAccountType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#storage_account_type MssqlDatabase#storage_account_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#tags MssqlDatabase#tags}.

---

##### `ThreatDetectionPolicy`<sup>Optional</sup> <a name="ThreatDetectionPolicy" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.threatDetectionPolicy"></a>

```csharp
public MssqlDatabaseThreatDetectionPolicy ThreatDetectionPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy">MssqlDatabaseThreatDetectionPolicy</a>

threat_detection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#threat_detection_policy MssqlDatabase#threat_detection_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.timeouts"></a>

```csharp
public MssqlDatabaseTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts">MssqlDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#timeouts MssqlDatabase#timeouts}

---

##### `TransparentDataEncryptionEnabled`<sup>Optional</sup> <a name="TransparentDataEncryptionEnabled" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.transparentDataEncryptionEnabled"></a>

```csharp
public bool|IResolvable TransparentDataEncryptionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#transparent_data_encryption_enabled MssqlDatabase#transparent_data_encryption_enabled}.

---

##### `TransparentDataEncryptionKeyAutomaticRotationEnabled`<sup>Optional</sup> <a name="TransparentDataEncryptionKeyAutomaticRotationEnabled" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.transparentDataEncryptionKeyAutomaticRotationEnabled"></a>

```csharp
public bool|IResolvable TransparentDataEncryptionKeyAutomaticRotationEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#transparent_data_encryption_key_automatic_rotation_enabled MssqlDatabase#transparent_data_encryption_key_automatic_rotation_enabled}.

---

##### `TransparentDataEncryptionKeyVaultKeyId`<sup>Optional</sup> <a name="TransparentDataEncryptionKeyVaultKeyId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.transparentDataEncryptionKeyVaultKeyId"></a>

```csharp
public string TransparentDataEncryptionKeyVaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#transparent_data_encryption_key_vault_key_id MssqlDatabase#transparent_data_encryption_key_vault_key_id}.

---

##### `ZoneRedundant`<sup>Optional</sup> <a name="ZoneRedundant" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseConfig.property.zoneRedundant"></a>

```csharp
public bool|IResolvable ZoneRedundant { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#zone_redundant MssqlDatabase#zone_redundant}.

---

### MssqlDatabaseIdentity <a name="MssqlDatabaseIdentity" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MssqlDatabaseIdentity {
    string[] IdentityIds,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#identity_ids MssqlDatabase#identity_ids}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#type MssqlDatabase#type}. |

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#identity_ids MssqlDatabase#identity_ids}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#type MssqlDatabase#type}.

---

### MssqlDatabaseImport <a name="MssqlDatabaseImport" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImport"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MssqlDatabaseImport {
    string AdministratorLogin,
    string AdministratorLoginPassword,
    string AuthenticationType,
    string StorageKey,
    string StorageKeyType,
    string StorageUri,
    string StorageAccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.administratorLogin">AdministratorLogin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#administrator_login MssqlDatabase#administrator_login}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.administratorLoginPassword">AdministratorLoginPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#administrator_login_password MssqlDatabase#administrator_login_password}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#authentication_type MssqlDatabase#authentication_type}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.storageKey">StorageKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#storage_key MssqlDatabase#storage_key}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.storageKeyType">StorageKeyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#storage_key_type MssqlDatabase#storage_key_type}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.storageUri">StorageUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#storage_uri MssqlDatabase#storage_uri}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#storage_account_id MssqlDatabase#storage_account_id}. |

---

##### `AdministratorLogin`<sup>Required</sup> <a name="AdministratorLogin" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.administratorLogin"></a>

```csharp
public string AdministratorLogin { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#administrator_login MssqlDatabase#administrator_login}.

---

##### `AdministratorLoginPassword`<sup>Required</sup> <a name="AdministratorLoginPassword" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.administratorLoginPassword"></a>

```csharp
public string AdministratorLoginPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#administrator_login_password MssqlDatabase#administrator_login_password}.

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#authentication_type MssqlDatabase#authentication_type}.

---

##### `StorageKey`<sup>Required</sup> <a name="StorageKey" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.storageKey"></a>

```csharp
public string StorageKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#storage_key MssqlDatabase#storage_key}.

---

##### `StorageKeyType`<sup>Required</sup> <a name="StorageKeyType" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.storageKeyType"></a>

```csharp
public string StorageKeyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#storage_key_type MssqlDatabase#storage_key_type}.

---

##### `StorageUri`<sup>Required</sup> <a name="StorageUri" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.storageUri"></a>

```csharp
public string StorageUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#storage_uri MssqlDatabase#storage_uri}.

---

##### `StorageAccountId`<sup>Optional</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImport.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#storage_account_id MssqlDatabase#storage_account_id}.

---

### MssqlDatabaseLongTermRetentionPolicy <a name="MssqlDatabaseLongTermRetentionPolicy" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MssqlDatabaseLongTermRetentionPolicy {
    string MonthlyRetention = null,
    string WeeklyRetention = null,
    double WeekOfYear = null,
    string YearlyRetention = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.monthlyRetention">MonthlyRetention</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#monthly_retention MssqlDatabase#monthly_retention}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.weeklyRetention">WeeklyRetention</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#weekly_retention MssqlDatabase#weekly_retention}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.weekOfYear">WeekOfYear</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#week_of_year MssqlDatabase#week_of_year}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.yearlyRetention">YearlyRetention</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#yearly_retention MssqlDatabase#yearly_retention}. |

---

##### `MonthlyRetention`<sup>Optional</sup> <a name="MonthlyRetention" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.monthlyRetention"></a>

```csharp
public string MonthlyRetention { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#monthly_retention MssqlDatabase#monthly_retention}.

---

##### `WeeklyRetention`<sup>Optional</sup> <a name="WeeklyRetention" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.weeklyRetention"></a>

```csharp
public string WeeklyRetention { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#weekly_retention MssqlDatabase#weekly_retention}.

---

##### `WeekOfYear`<sup>Optional</sup> <a name="WeekOfYear" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.weekOfYear"></a>

```csharp
public double WeekOfYear { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#week_of_year MssqlDatabase#week_of_year}.

---

##### `YearlyRetention`<sup>Optional</sup> <a name="YearlyRetention" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy.property.yearlyRetention"></a>

```csharp
public string YearlyRetention { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#yearly_retention MssqlDatabase#yearly_retention}.

---

### MssqlDatabaseShortTermRetentionPolicy <a name="MssqlDatabaseShortTermRetentionPolicy" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MssqlDatabaseShortTermRetentionPolicy {
    double RetentionDays,
    double BackupIntervalInHours = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy.property.retentionDays">RetentionDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#retention_days MssqlDatabase#retention_days}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy.property.backupIntervalInHours">BackupIntervalInHours</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#backup_interval_in_hours MssqlDatabase#backup_interval_in_hours}. |

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy.property.retentionDays"></a>

```csharp
public double RetentionDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#retention_days MssqlDatabase#retention_days}.

---

##### `BackupIntervalInHours`<sup>Optional</sup> <a name="BackupIntervalInHours" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy.property.backupIntervalInHours"></a>

```csharp
public double BackupIntervalInHours { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#backup_interval_in_hours MssqlDatabase#backup_interval_in_hours}.

---

### MssqlDatabaseThreatDetectionPolicy <a name="MssqlDatabaseThreatDetectionPolicy" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MssqlDatabaseThreatDetectionPolicy {
    string[] DisabledAlerts = null,
    bool|IResolvable EmailAccountAdminsEnabled = null,
    string[] EmailAddresses = null,
    double RetentionDays = null,
    string State = null,
    string StorageAccountAccessKey = null,
    string StorageEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.disabledAlerts">DisabledAlerts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#disabled_alerts MssqlDatabase#disabled_alerts}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.emailAccountAdminsEnabled">EmailAccountAdminsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#email_account_admins_enabled MssqlDatabase#email_account_admins_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.emailAddresses">EmailAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#email_addresses MssqlDatabase#email_addresses}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.retentionDays">RetentionDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#retention_days MssqlDatabase#retention_days}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#state MssqlDatabase#state}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#storage_account_access_key MssqlDatabase#storage_account_access_key}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.storageEndpoint">StorageEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#storage_endpoint MssqlDatabase#storage_endpoint}. |

---

##### `DisabledAlerts`<sup>Optional</sup> <a name="DisabledAlerts" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.disabledAlerts"></a>

```csharp
public string[] DisabledAlerts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#disabled_alerts MssqlDatabase#disabled_alerts}.

---

##### `EmailAccountAdminsEnabled`<sup>Optional</sup> <a name="EmailAccountAdminsEnabled" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.emailAccountAdminsEnabled"></a>

```csharp
public bool|IResolvable EmailAccountAdminsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#email_account_admins_enabled MssqlDatabase#email_account_admins_enabled}.

---

##### `EmailAddresses`<sup>Optional</sup> <a name="EmailAddresses" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.emailAddresses"></a>

```csharp
public string[] EmailAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#email_addresses MssqlDatabase#email_addresses}.

---

##### `RetentionDays`<sup>Optional</sup> <a name="RetentionDays" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.retentionDays"></a>

```csharp
public double RetentionDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#retention_days MssqlDatabase#retention_days}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#state MssqlDatabase#state}.

---

##### `StorageAccountAccessKey`<sup>Optional</sup> <a name="StorageAccountAccessKey" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.storageAccountAccessKey"></a>

```csharp
public string StorageAccountAccessKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#storage_account_access_key MssqlDatabase#storage_account_access_key}.

---

##### `StorageEndpoint`<sup>Optional</sup> <a name="StorageEndpoint" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy.property.storageEndpoint"></a>

```csharp
public string StorageEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#storage_endpoint MssqlDatabase#storage_endpoint}.

---

### MssqlDatabaseTimeouts <a name="MssqlDatabaseTimeouts" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MssqlDatabaseTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#create MssqlDatabase#create}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#delete MssqlDatabase#delete}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#read MssqlDatabase#read}. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#update MssqlDatabase#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#create MssqlDatabase#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#delete MssqlDatabase#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#read MssqlDatabase#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/mssql_database#update MssqlDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlDatabaseIdentityOutputReference <a name="MssqlDatabaseIdentityOutputReference" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MssqlDatabaseIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity">MssqlDatabaseIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentityOutputReference.property.internalValue"></a>

```csharp
public MssqlDatabaseIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseIdentity">MssqlDatabaseIdentity</a>

---


### MssqlDatabaseImportOutputReference <a name="MssqlDatabaseImportOutputReference" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MssqlDatabaseImportOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.resetStorageAccountId">ResetStorageAccountId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageAccountId` <a name="ResetStorageAccountId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.resetStorageAccountId"></a>

```csharp
private void ResetStorageAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.administratorLoginInput">AdministratorLoginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.administratorLoginPasswordInput">AdministratorLoginPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageKeyInput">StorageKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageKeyTypeInput">StorageKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageUriInput">StorageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.administratorLogin">AdministratorLogin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.administratorLoginPassword">AdministratorLoginPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageAccountId">StorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageKey">StorageKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageKeyType">StorageKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageUri">StorageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImport">MssqlDatabaseImport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdministratorLoginInput`<sup>Optional</sup> <a name="AdministratorLoginInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.administratorLoginInput"></a>

```csharp
public string AdministratorLoginInput { get; }
```

- *Type:* string

---

##### `AdministratorLoginPasswordInput`<sup>Optional</sup> <a name="AdministratorLoginPasswordInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.administratorLoginPasswordInput"></a>

```csharp
public string AdministratorLoginPasswordInput { get; }
```

- *Type:* string

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.authenticationTypeInput"></a>

```csharp
public string AuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageAccountIdInput"></a>

```csharp
public string StorageAccountIdInput { get; }
```

- *Type:* string

---

##### `StorageKeyInput`<sup>Optional</sup> <a name="StorageKeyInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageKeyInput"></a>

```csharp
public string StorageKeyInput { get; }
```

- *Type:* string

---

##### `StorageKeyTypeInput`<sup>Optional</sup> <a name="StorageKeyTypeInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageKeyTypeInput"></a>

```csharp
public string StorageKeyTypeInput { get; }
```

- *Type:* string

---

##### `StorageUriInput`<sup>Optional</sup> <a name="StorageUriInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageUriInput"></a>

```csharp
public string StorageUriInput { get; }
```

- *Type:* string

---

##### `AdministratorLogin`<sup>Required</sup> <a name="AdministratorLogin" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.administratorLogin"></a>

```csharp
public string AdministratorLogin { get; }
```

- *Type:* string

---

##### `AdministratorLoginPassword`<sup>Required</sup> <a name="AdministratorLoginPassword" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.administratorLoginPassword"></a>

```csharp
public string AdministratorLoginPassword { get; }
```

- *Type:* string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageAccountId"></a>

```csharp
public string StorageAccountId { get; }
```

- *Type:* string

---

##### `StorageKey`<sup>Required</sup> <a name="StorageKey" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageKey"></a>

```csharp
public string StorageKey { get; }
```

- *Type:* string

---

##### `StorageKeyType`<sup>Required</sup> <a name="StorageKeyType" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageKeyType"></a>

```csharp
public string StorageKeyType { get; }
```

- *Type:* string

---

##### `StorageUri`<sup>Required</sup> <a name="StorageUri" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.storageUri"></a>

```csharp
public string StorageUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImportOutputReference.property.internalValue"></a>

```csharp
public MssqlDatabaseImport InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseImport">MssqlDatabaseImport</a>

---


### MssqlDatabaseLongTermRetentionPolicyOutputReference <a name="MssqlDatabaseLongTermRetentionPolicyOutputReference" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MssqlDatabaseLongTermRetentionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetMonthlyRetention">ResetMonthlyRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetWeeklyRetention">ResetWeeklyRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetWeekOfYear">ResetWeekOfYear</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetYearlyRetention">ResetYearlyRetention</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMonthlyRetention` <a name="ResetMonthlyRetention" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetMonthlyRetention"></a>

```csharp
private void ResetMonthlyRetention()
```

##### `ResetWeeklyRetention` <a name="ResetWeeklyRetention" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetWeeklyRetention"></a>

```csharp
private void ResetWeeklyRetention()
```

##### `ResetWeekOfYear` <a name="ResetWeekOfYear" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetWeekOfYear"></a>

```csharp
private void ResetWeekOfYear()
```

##### `ResetYearlyRetention` <a name="ResetYearlyRetention" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.resetYearlyRetention"></a>

```csharp
private void ResetYearlyRetention()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetentionInput">MonthlyRetentionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetentionInput">WeeklyRetentionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYearInput">WeekOfYearInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetentionInput">YearlyRetentionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetention">MonthlyRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetention">WeeklyRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYear">WeekOfYear</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetention">YearlyRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy">MssqlDatabaseLongTermRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MonthlyRetentionInput`<sup>Optional</sup> <a name="MonthlyRetentionInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetentionInput"></a>

```csharp
public string MonthlyRetentionInput { get; }
```

- *Type:* string

---

##### `WeeklyRetentionInput`<sup>Optional</sup> <a name="WeeklyRetentionInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetentionInput"></a>

```csharp
public string WeeklyRetentionInput { get; }
```

- *Type:* string

---

##### `WeekOfYearInput`<sup>Optional</sup> <a name="WeekOfYearInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYearInput"></a>

```csharp
public double WeekOfYearInput { get; }
```

- *Type:* double

---

##### `YearlyRetentionInput`<sup>Optional</sup> <a name="YearlyRetentionInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetentionInput"></a>

```csharp
public string YearlyRetentionInput { get; }
```

- *Type:* string

---

##### `MonthlyRetention`<sup>Required</sup> <a name="MonthlyRetention" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetention"></a>

```csharp
public string MonthlyRetention { get; }
```

- *Type:* string

---

##### `WeeklyRetention`<sup>Required</sup> <a name="WeeklyRetention" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetention"></a>

```csharp
public string WeeklyRetention { get; }
```

- *Type:* string

---

##### `WeekOfYear`<sup>Required</sup> <a name="WeekOfYear" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYear"></a>

```csharp
public double WeekOfYear { get; }
```

- *Type:* double

---

##### `YearlyRetention`<sup>Required</sup> <a name="YearlyRetention" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetention"></a>

```csharp
public string YearlyRetention { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicyOutputReference.property.internalValue"></a>

```csharp
public MssqlDatabaseLongTermRetentionPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseLongTermRetentionPolicy">MssqlDatabaseLongTermRetentionPolicy</a>

---


### MssqlDatabaseShortTermRetentionPolicyOutputReference <a name="MssqlDatabaseShortTermRetentionPolicyOutputReference" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MssqlDatabaseShortTermRetentionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.resetBackupIntervalInHours">ResetBackupIntervalInHours</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupIntervalInHours` <a name="ResetBackupIntervalInHours" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.resetBackupIntervalInHours"></a>

```csharp
private void ResetBackupIntervalInHours()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.backupIntervalInHoursInput">BackupIntervalInHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.backupIntervalInHours">BackupIntervalInHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.retentionDays">RetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy">MssqlDatabaseShortTermRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackupIntervalInHoursInput`<sup>Optional</sup> <a name="BackupIntervalInHoursInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.backupIntervalInHoursInput"></a>

```csharp
public double BackupIntervalInHoursInput { get; }
```

- *Type:* double

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.retentionDaysInput"></a>

```csharp
public double RetentionDaysInput { get; }
```

- *Type:* double

---

##### `BackupIntervalInHours`<sup>Required</sup> <a name="BackupIntervalInHours" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.backupIntervalInHours"></a>

```csharp
public double BackupIntervalInHours { get; }
```

- *Type:* double

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.retentionDays"></a>

```csharp
public double RetentionDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicyOutputReference.property.internalValue"></a>

```csharp
public MssqlDatabaseShortTermRetentionPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseShortTermRetentionPolicy">MssqlDatabaseShortTermRetentionPolicy</a>

---


### MssqlDatabaseThreatDetectionPolicyOutputReference <a name="MssqlDatabaseThreatDetectionPolicyOutputReference" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MssqlDatabaseThreatDetectionPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetDisabledAlerts">ResetDisabledAlerts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetEmailAccountAdminsEnabled">ResetEmailAccountAdminsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetEmailAddresses">ResetEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetRetentionDays">ResetRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetStorageAccountAccessKey">ResetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetStorageEndpoint">ResetStorageEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabledAlerts` <a name="ResetDisabledAlerts" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetDisabledAlerts"></a>

```csharp
private void ResetDisabledAlerts()
```

##### `ResetEmailAccountAdminsEnabled` <a name="ResetEmailAccountAdminsEnabled" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetEmailAccountAdminsEnabled"></a>

```csharp
private void ResetEmailAccountAdminsEnabled()
```

##### `ResetEmailAddresses` <a name="ResetEmailAddresses" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetEmailAddresses"></a>

```csharp
private void ResetEmailAddresses()
```

##### `ResetRetentionDays` <a name="ResetRetentionDays" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetRetentionDays"></a>

```csharp
private void ResetRetentionDays()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetStorageAccountAccessKey` <a name="ResetStorageAccountAccessKey" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetStorageAccountAccessKey"></a>

```csharp
private void ResetStorageAccountAccessKey()
```

##### `ResetStorageEndpoint` <a name="ResetStorageEndpoint" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.resetStorageEndpoint"></a>

```csharp
private void ResetStorageEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.disabledAlertsInput">DisabledAlertsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.emailAccountAdminsEnabledInput">EmailAccountAdminsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.emailAddressesInput">EmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.storageAccountAccessKeyInput">StorageAccountAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.storageEndpointInput">StorageEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.disabledAlerts">DisabledAlerts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.emailAccountAdminsEnabled">EmailAccountAdminsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.emailAddresses">EmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.retentionDays">RetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.storageEndpoint">StorageEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy">MssqlDatabaseThreatDetectionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisabledAlertsInput`<sup>Optional</sup> <a name="DisabledAlertsInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.disabledAlertsInput"></a>

```csharp
public string[] DisabledAlertsInput { get; }
```

- *Type:* string[]

---

##### `EmailAccountAdminsEnabledInput`<sup>Optional</sup> <a name="EmailAccountAdminsEnabledInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.emailAccountAdminsEnabledInput"></a>

```csharp
public bool|IResolvable EmailAccountAdminsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EmailAddressesInput`<sup>Optional</sup> <a name="EmailAddressesInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.emailAddressesInput"></a>

```csharp
public string[] EmailAddressesInput { get; }
```

- *Type:* string[]

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.retentionDaysInput"></a>

```csharp
public double RetentionDaysInput { get; }
```

- *Type:* double

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `StorageAccountAccessKeyInput`<sup>Optional</sup> <a name="StorageAccountAccessKeyInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.storageAccountAccessKeyInput"></a>

```csharp
public string StorageAccountAccessKeyInput { get; }
```

- *Type:* string

---

##### `StorageEndpointInput`<sup>Optional</sup> <a name="StorageEndpointInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.storageEndpointInput"></a>

```csharp
public string StorageEndpointInput { get; }
```

- *Type:* string

---

##### `DisabledAlerts`<sup>Required</sup> <a name="DisabledAlerts" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.disabledAlerts"></a>

```csharp
public string[] DisabledAlerts { get; }
```

- *Type:* string[]

---

##### `EmailAccountAdminsEnabled`<sup>Required</sup> <a name="EmailAccountAdminsEnabled" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.emailAccountAdminsEnabled"></a>

```csharp
public bool|IResolvable EmailAccountAdminsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EmailAddresses`<sup>Required</sup> <a name="EmailAddresses" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.emailAddresses"></a>

```csharp
public string[] EmailAddresses { get; }
```

- *Type:* string[]

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.retentionDays"></a>

```csharp
public double RetentionDays { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.storageAccountAccessKey"></a>

```csharp
public string StorageAccountAccessKey { get; }
```

- *Type:* string

---

##### `StorageEndpoint`<sup>Required</sup> <a name="StorageEndpoint" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.storageEndpoint"></a>

```csharp
public string StorageEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicyOutputReference.property.internalValue"></a>

```csharp
public MssqlDatabaseThreatDetectionPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseThreatDetectionPolicy">MssqlDatabaseThreatDetectionPolicy</a>

---


### MssqlDatabaseTimeoutsOutputReference <a name="MssqlDatabaseTimeoutsOutputReference" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Azurerm;

new MssqlDatabaseTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts">MssqlDatabaseTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MssqlDatabaseTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.mssqlDatabase.MssqlDatabaseTimeouts">MssqlDatabaseTimeouts</a>

---



